export function getAgeByBirthDate(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  console.log(birthDate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function getRandom0_1() {
  return Math.random();
}