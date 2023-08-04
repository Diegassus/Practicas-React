import './TwitterAccountCard.css'

export function TwitterAccountCard (userName, name){
    return (
        <article className="tw-accountCard">
            <header className="tw-accountCard-header">
                <img 
                    className="tw-accountCard-avatar" 
                    src={`https://unavatar.io/${userName}`} 
                    alt={`El avatar de ${name}`}/>
                <div className="tw-accountCard-info">
                    <strong>{name}</strong>
                    <span className="tw-accountCard-username">@{userName}</span>
                </div>
            </header>
        </article>
    )
}