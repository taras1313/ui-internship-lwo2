/* eslint "require-jsdoc": 0 */


export class Person {
  constructor(FullName) {
    this.splittedFN = FullName.split(' ');
  }
  getFirstName() {
    this.firstName = this.splittedFN[0];
    return this.splittedFN[0];
  }
  setFirstName(name) {
    this.firstName = name;
  }
  getLastName() {
    this.lastName = this.splittedFN[1];
    return this.splittedFN[1];
  }
  setLastName(name) {
    this.lastName = name;
  }
  getFullName() {
    this.fullName = this.firstName + ' ' + this.lastName;
    return this.fullName;
  }
  setFullName(name) {
    this.splittedFN = name.split(' ');
    this.firstName = this.splittedFN[0];
    this.lastName = this.splittedFN[1];
  }
}
