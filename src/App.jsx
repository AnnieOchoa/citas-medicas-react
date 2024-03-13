import { useRef, useState } from 'react';
import Button from './components/Button';
import Datepicker from './components/Datepicker';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Textinput from './components/Textinput';
import especialidades from './helpers/especialidades';
import Card from './components/Card';
import emptyState from './assets/emptystate.svg'

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialty:'',
    date: '',
    sympthoms: ''
  })
  const [cards, setCards] = useState([])
  const appointments = useRef(null)
  const form = useRef(null)

  const scrollToAppointments = () => {
    appointments.current?.scrollIntoView({behavior: 'smooth'})
  }

  const cleanFields = () => {
    setFormData({
      name: '',
      email: '',
      specialty:'',
      date: '',
      sympthoms: ''
    })
    form.current?.reset()
  }

  const submitHanlder = (e) => {
    e.preventDefault();
    setCards([
      ...cards,
      formData
    ])
    cleanFields()
    scrollToAppointments()
  };

  const onChangeHandler = ({target: {value}}, field) => {
    setFormData({
      ...formData,
      [field]: value
    })
  }

  return (
    <>
      <Header ctaHandler={scrollToAppointments} />

      <main className="main-register container">
        <div className="main-register__title">
          <h1>Información para su cita</h1>
          <p>
            Complete los campos obligatorios del formulario para solicitar su
            cita médica.
          </p>
        </div>

        <form ref={form} className="main-register__form">
          <Textinput onChange={(e) => onChangeHandler(e, 'name')} value={formData.name} name="Nombre" placeholder="Ingrese un nombre"/>
          <Textinput onChange={(e) => onChangeHandler(e, 'email')} value={formData.email} name="Email" placeholder="Ingrese un email" />
          <Dropdown onChange={(e) => onChangeHandler(e, 'specialty')} value={formData.sympthoms} options={especialidades} label='Especialidad'/>
          <Datepicker onChange={(e) => onChangeHandler(e, 'date')} value={formData.date} label='Fecha'/>
          <Textinput onChange={(e) => onChangeHandler(e, 'sympthoms')} value={formData.sympthoms} name="Sintomas" placeholder="Describa los sintomas" />

          <div className="main-register__form-cta">
            <Button onClick={submitHanlder} name="Confirmar Cita" />
          </div>
        </form>

      </main>
        <div ref={appointments} className="card-container container">
          <div className="card-container__heading">
            <h2>Mis citas</h2>
          </div>
          <div className="card-container__content">
            {cards.length 
            ? cards.map((card, index) => 
              (<Card key={index} sympthoms={card.sympthoms} date={card.date} specialty={card.specialty} email={card.email} name={card.name} />)) 
            : (
              <section className='empty-state'>
              <h3>No tienes citas. Comienza agregando una</h3>
              <img src={emptyState} alt="" />
              </section>
            )}
          </div>
        </div>
    </>
  );
};

export default App;
