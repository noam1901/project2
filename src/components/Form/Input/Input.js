
function Input(props){
    return (
        <div className="single-input">
            <label>{props.label}</label><br></br>
            {!(props.type === 'select')?<div className="input-container">
                <p className='icon'>
                    <props.icon></props.icon>
                </p>
                    <input name={props.name} type={props.type} defaultValue={props.value} placeholder={props.placeholder} onBlur={(e)=>props.onBlur(e.target.name, e.target.value)}></input>
                </div>:
            <div className="input-container">
                <p className='icon'>
                    <props.icon></props.icon>
                </p>
                <select onChange={(e)=>props.onBlur(e.target.name, e.target.value)} name={props.name} className='select-input'>
                    {props.values.map(val => <option value={val.value} key={val.value}>{val.name}</option>)}
                </select>
            </div>}
            <div className="input-error">
               {
                props.errors.map((error, index)=> <p key={index}>{error.value}</p>)
            } 
            </div>
            
        </div>
    )
}
export default Input