

const FullName = (props) => {
  return (
      <div>
          <h4 className="name">Hello my name is<br/>{props.name} {props.lastName} and I'am<br/>{props.age}</h4>
          <img src="./img.jpg" className="image" />
      </div>
  );
}
export default FullName;