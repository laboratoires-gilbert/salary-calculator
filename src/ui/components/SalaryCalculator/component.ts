import Component, { tracked } from '@glimmer/component';

export default class SalaryCalculator extends Component {
  roles = [
    { title: "Backend Developer", baseSalary: 40000 },
    { title: "Frontend Developer", baseSalary: 34000 }
  ]

  cities = [
    { name: 'Caen', rentIndex: 65 },
    { name: 'Paris', rentIndex: 84.90 }
  ]

  levels = [
    { name: 'junior', factor: 0.8 },
    { name: 'intermediate', factor: 1 },
    { name: 'senior', factor: 1.2 },
    { name: 'staff', factor: 1.4 },
    { name: 'manager', factor: 1.4 }
  ]

  experiences = [
    { label: 'Learning', factor: 0.8 },
    { label: 'Growing', factor: 0.9 },
    { label: 'Comfortable', factor: 1 },
    { label: 'Thriving', factor: 1.1 },
    { label: 'Expert', factor: 1.2 },
  ]

  @tracked selectedRole: number;
  @tracked selectedCity: number;
  @tracked selectedLevel: number;
  @tracked selectedExperience: number;

  constructor(options) {
    super(options);

    this.selectedRole = null
    this.selectedCity = null
    this.selectedLevel = 1
    this.selectedExperience = 2
  }

  @tracked
  get hasCompleteForm() {
    return this.yearlySalary > 0;
  }

  @tracked
  get yearlySalary() {
    const { selectedRole, selectedCity } = this;

    if (selectedRole == null || selectedCity == null) {
      return 0
    }

    let referenceRentIndex = this.cities.find( city => city.name == 'Paris').rentIndex
    let baseSalary = this.roles[this.selectedRole].baseSalary
    let rentIndex = this.cities[this.selectedCity].rentIndex
    let levelFactor = this.levels[this.selectedLevel].factor
    let experienceFactor = this.experiences[this.selectedExperience].factor

    // 40000 * 0,79 * 0,8 * 0,9
    return baseSalary * ( 0.7 * (rentIndex / referenceRentIndex) + 0.3) * levelFactor * experienceFactor
  }

  @tracked
  get monthlySalary() {
    const { yearlySalary } = this

    return yearlySalary / 13
  }

  updateCity(event) {
    const { value } = event.target;
    this.selectedCity = value;
  }

  updateRole(event) {
    const { value } = event.target;
    this.selectedRole = value;
  }

  updateLevel(event) {
    const { value } = event.target;
    this.selectedLevel = value;
  }

  updateExperience(event) {
    const { value } = event.target;

    this.selectedExperience = value;
  }
}
