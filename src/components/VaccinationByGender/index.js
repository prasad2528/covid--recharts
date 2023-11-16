// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props
  return (
    <div className="chart-container">
      <h1 className="coverage-heading">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          data={vaccinationByGenderDetails}
          cx="50%"
          cy="60%"
          startAngle={180}
          endAngle={0}
          innerRadius="25%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#2d87bb" />
          <Cell name="Others" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          align="center"
          verticalAlign="bottom"
          layout="horizontal"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}
export default VaccinationByGender
