const Qoutes = ({qoutes}) => {
  return (
    <div  id="text">
        {Object.keys(qoutes).map((KeyName, i) => (
            <div key={i}>
                 <p className=""><i>{qoutes['text']}</i></p> 
                 <p id="author">{qoutes['author']}</p>  
            </div>
        ))}
    </div>
  )
}

export default Qoutes
