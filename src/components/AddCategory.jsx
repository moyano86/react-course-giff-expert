import { useState } from "react"

//export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState();

  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  //Si pasáramos el setState (setCategories) desde el compoennte padre, el onSubmit sería así
  // const onSubmit = (ev) => {
  //   //Con el preventDefault evitamos el comportamiento predefinido del formulario de volver a renderizar el componente
  //   ev.preventDefault();
  //   //Si no hay ningún valor en el input value, no cambiamos el estado
  //   if(inputValue.trim().length < 1) return;
  //   //En useState la función setState apunta a la dirección del último valor que le asignamos, por eso este cat que le pasamos aquí apunta al categories 
  //   //del componente padre, aunque no se lo hayamos pasado explícitamente como props 
  //   //setCategories(cat => [inputValue, ...cat])
  //   setInputValue('')
  // }

  //Si en vez de pasar el setState desde el componente padre solo queremos devolver el valor, el onSubmit sería así
  const onSubmit = (ev) => {
    ev.preventDefault();
    const newInputValue = inputValue.trim();
    if(newInputValue.length < 1) return;
    onNewCategory(newInputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='Buscar gifs'
        type='text'
        value={inputValue}
        onChange={onInputChange}
      ></input>
    </form>
  );
}
