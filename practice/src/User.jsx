
const User = ({data}) => {
  return (
    <div>
      <h4>User component</h4>
      <h2>{data.name}</h2>
      {data.age}
    </div>
  )
}

export default User
