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
        <div className={s.flag}><span className={`fi fi-${currentProgram.countryCode.toLowerCase()}`}></span></div>
        <h1>{currentProgram.title}</h1>
        <p>{currentProgram.details}</p>
        <a href={currentProgram.link} target="_blank">Сайт программы</a>
      </section>

      <div className={s.details}>
        <h2>Путь 🐾</h2>
        <ul>
          {currentProgram.roadmap?.map((step: any, i: number) => (
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
        <p>{currentProgram.familyDetails || "Неизвестно!"}</p>
      </div>

      <div className={s.details}>
        <h2>Требования в целом 🎯</h2>
        <p>{currentProgram.requirements}</p>
      </div>

      <div className={s.details}>
        <h2>Что по доходу 💰</h2>
        <p><strong>Сумма:</strong> {currentProgram.incomeRequirements?.currency && (currencies as any)[currentProgram.incomeRequirements.currency?.toUpperCase()]?.symbol}{currentProgram.incomeRequirements?.amount} / {currentProgram.incomeRequirements?.unit && periodLabelTranslations[currentProgram.incomeRequirements.unit]}</p>
        <p><strong>Подробнее:</strong> {currentProgram.incomeRequirementsDetails}</p>   
      </div>

      <div className={s.details}>
        <h2>Другие требования ✔️</h2>
        <p><strong>Местные заказчики:</strong> {currentProgram.needsLocalClients ? "Нужны" : "Не нужны"}</p>
        <p><strong>Страховка:</strong> {currentProgram.insuranceRequirements ? "Да" : "Нет"}</p>
        <p><strong>Справка о не судимости:</strong> {currentProgram.criminalRecord ? "Да" : "Нет"}</p>
        <p><strong>Подтверждение адреса:</strong> {currentProgram.addressRequirements ? "Да" : "Нет"}</p>
      </div>

      {currentProgram.important && (
        <div className={s.details}>
          <h2>Еще из важного! ✍️</h2>
          <p>{currentProgram.important}</p>
        </div>
      )}

      <div className={s.details}>
        <h2>По оформлению 📝</h2>
        <p><strong>Стоимость:</strong> {currentProgram.cost || "Боб не знает"}</p>
        <p><strong>Квота:</strong> {currentProgram.quota || "Нет"}</p>
        <p><strong>Сроки:</strong> {currentProgram.timeToGet || "Боб не знает"}</p>
        <p><strong>Где делать:</strong> {currentProgram.whereToGet || "Боб не знает"}</p>
      </div>
    </div>
  )
}

export default ProgramPage;