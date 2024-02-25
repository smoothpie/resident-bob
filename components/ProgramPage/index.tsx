import { permitTypeTranslations, periodLabelTranslations } from '../ProgramsBrowse';
import currencies from '../../data/currencies.json';
import s from './ProgramPage.module.scss';

const getRenewalDetails = (step: any) => {
  let details = "";
  if (step.renewal) {
    details = "Да";
  }
  if (step.renewalCount) {
    details += `, ${step.renewalCount} раз`;
  }
  if (step.renewalPeriod) {
    details += `, на ${step.renewalPeriod} месяцев`;
  }
  if (!step.renewal) {
    details = "Нет";
  }
  return details;
}

const ProgramPage = ({ currentProgram }: any) => {
  return (
    <div className={s.container}>
      <section className={s.header}>
        <div className={s.flag}><span className={`fi fi-${currentProgram["Country code"].toLowerCase()}`}></span></div>
        <h1>{currentProgram.Country}</h1>
        <p>{currentProgram.Details}</p>
        <a href={currentProgram.Link} target="_blank">Сайт программы</a>
      </section>

      <div className={s.details}>
        <h2>Путь 🐾</h2>
        <ul>
          {currentProgram.Roadmap.map((step: any, i: number) => (
            <li key={i} className={s.detailsBlockСontainer}>
              <div className={s.detailsBlock}>
                <div className={s.number}>{i + 1}</div>
                <div className={s.info}>
                  <p><strong>Тип:</strong> {permitTypeTranslations[step.type]}</p>
                  <p><strong>Продолжительность:</strong> {step.period || "?"} месяцев</p>
                  <p><strong>Возможность продлить:</strong> {getRenewalDetails(step)}</p>
                  {step.details && <p><strong>Детали:</strong> {step.details}</p>}
                  {step.yearsToPermanent && <p><strong>Лет до ПМЖ:</strong> {step.yearsToPermanent}</p>}
                </div>
              </div>
              <div className={s.separator}>⤵</div>
            </li>
          ))}
        </ul>
      </div>

      <div className={s.details}>
        <h2>Кого можно взять? ❤️</h2>
        <p>{currentProgram["Family details"] || "Неизвестно!"}</p>
      </div>

      <div className={s.details}>
        <h2>Требования в целом 🎯</h2>
        <p>{currentProgram.Requirements}</p>
      </div>

      <div className={s.details}>
        <h2>Что по доходу 💰</h2>
        <p><strong>Сумма:</strong> {currentProgram["Income requirements"]?.currency && (currencies as any)[currentProgram["Income requirements"].currency?.toUpperCase()]?.symbol}{currentProgram["Income requirements"]?.amount} / {currentProgram["Income requirements"]?.unit && periodLabelTranslations[currentProgram["Income requirements"].unit]}</p>
        <p><strong>Подробнее:</strong> {currentProgram["Income requirements details"]}</p>   
      </div>

      <div className={s.details}>
        <h2>Другие требования ✔️</h2>
        <p><strong>Местные заказчики:</strong> {currentProgram["Needs client from country"] ? "Нужны" : "Не нужны"}</p>
        <p><strong>Страховка:</strong> {currentProgram["Insurance requirements"] ? "Да" : "Нет"}</p>
        <p><strong>Справка о не судимости:</strong> {currentProgram["Criminal record"] ? "Да" : "Нет"}</p>
        <p><strong>Подтверждение адреса:</strong> {currentProgram["Address requirements"] ? "Да" : "Нет"}</p>
      </div>

      {currentProgram["Important"] && (
        <div className={s.details}>
          <h2>Еще из важного! ✍️</h2>
          <p>{currentProgram["Important"]}</p>
        </div>
      )}

      <div className={s.details}>
        <h2>По оформлению 📝</h2>
        <p><strong>Стоимость:</strong> {currentProgram.Cost || "?"}</p>
        <p><strong>Квота:</strong> {currentProgram.Quota || "-"}</p>
        <p><strong>Сроки:</strong> {currentProgram["Time to get"] || "?"}</p>
        <p><strong>Где делать:</strong> {currentProgram["Where to get"] || "?"}</p>
      </div>
    </div>
  )
}

export default ProgramPage;