const showSpeed = (speedometerElement, car) => {
    speedometerElement.innerText = car.getSpeed();
};
const makeAccelerator = (acceleratorButton, speedometerElement, car) => {
    acceleratorButton.addEventListener('click', () => {
        car.accelerate();
        showSpeed(speedometerElement, car);
    })
};
const updateCheckEngineLight = (checkEngineLightElement, car) => {
    if (car.getEngineHealth() < 100) {
        checkEngineLightElement.innerText = 'CHECK ENGINE';
    }
};