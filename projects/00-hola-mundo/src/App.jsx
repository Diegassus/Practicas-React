import { TwitterAccountCard } from "./TwitterAccountCard"
import { TwitterButton } from "./TwitterButton"
import './App.css'
export function App(){ // equivalente a usar React.Fragment
    return(
        <>
            <div className="tw-accountCard-container">
                <div className="tw-accountCard-item">
                    {TwitterAccountCard("Tincho", "Diego Martin Diaz")}
                    {TwitterButton(true)}
                </div>
                <div className="tw-accountCard-item">
                    {TwitterAccountCard("ElPetiAgus1000", "Agustin Diaz")}
                    {TwitterButton(false)}
                </div>
                <div className="tw-accountCard-item">
                    {TwitterAccountCard("Terracota33", "Carlos Benavidez")}
                    {TwitterButton(true)}
                </div>
                <div className="tw-accountCard-item">
                    {TwitterAccountCard("midudev", "Marcelo Vazquez")}
                    {TwitterButton(true)}
                </div>
            </div>
        </>
    )
}