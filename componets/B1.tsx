

export default function B1() {
    const handleClick = () => {
        console.log('clicked')
      }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
