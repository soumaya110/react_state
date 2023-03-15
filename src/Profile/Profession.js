const Profession =(props) =>{
    return(
        <div>
            <h5 className="Prof"> "{props.profession} at GOMYCODE Academy.<br/>
             {props.study}<br/> with a degree in the Telecommunication Network and am looking for a new <br />
            opportunity as a web developer" 
            </h5>
    </div>
    )
}
export default Profession;