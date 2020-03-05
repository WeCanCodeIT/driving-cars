const updateSpeedometer = (speedometerElement, car)=>{
    speedometerElement.innerText = car.getSpeed();
}

const updateCheckEngineLight = (checkEngineLight, car) => {
    if(car.getEngineHealth()<100){
        checkEngineLight.innerText='CHECK ENGINE'
    }
}
const makeButtonIntoAccelerator = (accelerator, speedometer, car) =>{
    accelerator.addEventListener('click', ()=>{
        car.accelerate();
        updateSpeedometer(speedometer, car);
        updateDashBoard()
    })
}
const makeButtonIntoBrake = (brake, speedometer, car) =>{
    brake.addEventListener('click', ()=>{
        car.brake();
        updateSpeedometer(speedometer, car);
        updateDashBoard()
    });
}
const updateDashBoard = ()=>{
    updateSpeedometer(speedometerElement, appCar);
    updateCheckEngineLight(checkEngineLight, appCar)
}

const acceleratorButton = document.querySelector('.floorboard__accelerator');
const brakeButton = document.querySelector('.floorboard__brake');
const speedometerElement = document.querySelector('.dashboard__speedometer');
const checkEngineLight = document.querySelector('.dashboard__check-engine-light');
const appCar = new Car();

makeButtonIntoAccelerator(acceleratorButton, speedometerElement, appCar);
makeButtonIntoBrake(brakeButton,speedometerElement, appCar);