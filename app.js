const exercise = document.querySelector('#exercise');
const btn = document.querySelector('.submit');

btn.addEventListener('click', function () {
    const exerciseValue = exercise.value;
    console.log(exerciseValue);
});
