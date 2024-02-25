import { useState, useEffect } from 'react';
import { Table, Checkbox } from 'antd';
import nomadVisas from '../../data/nomadVisas.json';
import currencies from '../../data/currencies.json';
import SortSelect from '../SortSelect';
import Link from '../Link'
import s from './ProgramsBrowse.module.scss';

// tags with benefits column. like can bring family. no income requirements
// warnings

// sort and filter

export const periodLabelTranslations: any = {
  "month": "месяц",
  "year": "год",
}

export const permitTypeTranslations: any = {
  "visa": "виза",
  "residency": "ВНЖ",
}

const columns = [
  {
    title: 'Country',
    dataIndex: 'Country',
    key: 'Country',
  },
  {
    title: 'Details',
    dataIndex: 'Details',
    key: 'Details',
  },
  {
    title: 'Requirements',
    dataIndex: 'Requirements',
    key: 'Requirements',
  },
  {
    title: 'Income requirements',
    dataIndex: 'Income requirements',
    key: 'Income requirements',
  },
];

// filters
// monthly income slider
// allows to bring family checkbox
// leads to residency checkbox

// sort by:
// alphabetically (by country name)
// income requirements

const sortOptions = [
  { value: "az", dir: "asc", label: "Name (A-Z)" },
  { value: "requiredIncome", dir: "asc", label: "Required income" },
  { value: "processingTime", dir: "asc", label: "Processing time" },
];

const ProgramsTable = () => {
  const [sortBy, setSortBy] = useState<any>(sortOptions[0]);
  const [filterValues, setFilterValues] = useState<any>({
    hideWIP: true,
  });
  const [filteredResults, setFilteredResults] = useState<any[]>(nomadVisas.filter((v: any) => v.Status !== "wip")); 

  useEffect(() => {
    setFilteredResults(nomadVisas.filter((v: any) => {
      let match = true;
      if (filterValues.monthlyIncome) {
        // notes: may need a separate yearly one. or add a note about guessing yearly
        // ahh also currency conversion
        // how long do you have this income for?
        // before/after tax
        // yeah a lot to consider. definitely needs a note like "double check"
        // separate the ones with unclear requirements vs no requirements
        const monthlyRequirementMatch = v["Income requirements"]?.unit === "month" && v["Income requirements"]?.amount <= filterValues.monthlyIncome;
        if (!(monthlyRequirementMatch || v["Income requirements details"] === "-")) {
          match = false;
        }
      }
      // separate unclear vs no?
      if (filterValues.allowsFamily && !(v["Bringing family"] || (v["Family details"] === ""))) {
        match = false;
      }
      if (filterValues.isResidency) {
        const currentStep = v.Roadmap?.[0];
        const hasResidency = currentStep?.type === "residency";
        if (!hasResidency) {
          match = false;
        }
      }
      if (filterValues.leadsToPermanent) {
        const hasResidency = v.Roadmap?.find((r: any) => r.type === "residency");
        const leadsToPermanent = hasResidency?.yearsToPermanent;
        if (!leadsToPermanent) {
          match = false;
        }
      }
      if (filterValues.noLocalClients && v["Needs client from country"]) {
        match = false;
      }
      if (filterValues.hideWIP && v.Status === "wip") {
        match = false;
      }
      return match;
    }))
  }, [filterValues])

  const sortResults = (option: any) => {

  }

  const getProgramDescription = (description: string) => {
    return description.length > 150 ? description.slice(0, 150) + "..." : description;
  }
  
  return (
    <div className={s.container}>
      <div className={s.topBar}>
        <input className={s.search} placeholder="Search..." />
        <SortSelect
          options={sortOptions}
          defaultValue={sortBy}
          onSelect={(option: any) => sortResults(option)}
        />
        <div className={s.resultsCount}>
          <div className={s.resultsCountNumber}>{filteredResults.length}</div>&nbsp;results
        </div>
      </div>
      <section className={s.content}>
        <div className={s.filters}>
          <h3>Фильтры</h3>

          <div className={s.field}>
            <label htmlFor="monthlyIncome">Твой доход в месяц, $</label>
            <input type="number" name="monthlyIncome" onChange={e => setFilterValues({ ...filterValues, monthlyIncome: e.target.value })} onWheel={(e: any) => e.target.blur()} />
          </div>

          <div className={s.field}>
            <Checkbox value="allowsFamily" onChange={e => setFilterValues({ ...filterValues, allowsFamily: e.target.checked })}>
              Можно взять семью
            </Checkbox>
          </div>

          <div className={s.field}>
            <Checkbox value="isResidency" onChange={e => setFilterValues({ ...filterValues, isResidency: e.target.checked })}>
              Дайте сразу ВНЖ
            </Checkbox>
          </div>

          {/* <div className={s.field}>
            <Checkbox value="leadsToPermanent" onChange={e => setFilterValues({ ...filterValues, leadsToPermanent: e.target.checked })}>
              Везет к ПМЖ
            </Checkbox>
          </div> */}

          <div className={s.field}>
            <Checkbox value="noLocalClients" onChange={e => setFilterValues({ ...filterValues, noLocalClients: e.target.checked })}>
              Не нужны местные заказчики
            </Checkbox>
          </div>

          <div className={s.field}>
            <Checkbox value="onlineApplication" onChange={e => setFilterValues({ ...filterValues, onlineApplication: e.target.checked })}>
              Онлайн подача
            </Checkbox>
          </div>

          <div className={s.field}>
            <Checkbox defaultChecked value="hideWIP" onChange={e => setFilterValues({ ...filterValues, hideWIP: e.target.checked })}>
              Скрыть программы в разработке
            </Checkbox>
          </div>
        </div>

        <div className={s.programs}>
          {filteredResults.length ? (
            filteredResults.map((program, i) => (
              <Link href={`/nomad-visas/${program.Slug}`} key={i}>
                <article className={s.program}>
                  <h3><span className={`fi fi-${program["Country code"].toLowerCase()}`}></span> &nbsp;{program.Country}</h3>
                  <p>{getProgramDescription(program.Details)}</p>
                  <ul>
                    {/* <li>Требования: {program.Requirements}</li> */}
                    {program["Income requirements"] && (
                      <li>💰 &nbsp;{program["Income requirements"]?.currency && (currencies as any)[program["Income requirements"].currency?.toUpperCase()]?.symbol}{program["Income requirements"]?.amount} / {program["Income requirements"]?.unit && periodLabelTranslations[program["Income requirements"].unit]}</li>
                    )}
                    {program["Roadmap"] && (
                      <li key={i}>🐾 &nbsp;{program.Roadmap.map((r: any) => `${r.type && permitTypeTranslations[r.type]} на ${r.period || "?"} месяцев`).join(" → ")}</li>
                    )}
                  </ul>
                </article>
              </Link>
            ))
          ) : (
            <div className={s.noResults}>Мдя, пока что таких программ нет. Но ничего, ты справишься.</div>
          )}
        </div>
      </section>
    </div>
    // <Table dataSource={nomadVisas} columns={columns} />
  )
}

export default ProgramsTable