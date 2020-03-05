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

const wireAcceleratorButton = (car) => {
    const acceleratorButton = document.querySelector('.floorboard__accelerator');
    const speedometer = document.querySelector('.dashboard__speedometer');
    makeAccelerator(acceleratorButton, speedometer, car);
}

const appCar = new Car();
wireAcceleratorButton(appCar);