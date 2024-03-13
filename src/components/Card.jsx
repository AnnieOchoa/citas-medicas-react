import Button from "./Button";

const Card = ({name,email, specialty, date, sympthoms}) => {
    return (
        <div className="main-card">
            <div className="main-card__avatar">
                <p>{name.slice(0,1)}</p>
            </div>
            <hr />
            <div className="main-card__heading">
                <p>{name}</p>
            </div>
            <div className="main-card__text">
                <p><strong>Email:</strong> {email}</p>
            </div>
            <div className="main-card__text">
                <p><strong>Especialidad:</strong> {specialty}</p>
            </div>
            <div className="main-card__text">
                <p><strong>Fecha:</strong> {date}</p>
            </div>
            <div className="main-card__text">
                <p><strong>Síntomas:</strong> {sympthoms}</p>
            </div>
            <div className="main-card__CTA">
                <Button name='Editar' />
                <Button type='outlined' name='Cancelar' />
            </div>
        </div>
    )
}

export default Card;