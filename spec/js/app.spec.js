describe('app.js manipulates the DOM to reflect the status of a Car object.', () => {
    let testCar;
    let testSpeedometer;
    let testAccelerator;
    beforeEach(() => {
        testCar = new Car();
        testSpeedometer = document.createElement('div');
        testAccelerator = document.createElement('button');
        makeButtonIntoAccelerator(testAccelerator, testSpeedometer, testCar);

    })
    describe('updateSpeedometer() changes an element\'s innerText to match a given car\'s speed', () => {

        it('Speedometer element should have an innerText of \'0\' if the car is not moving.', () => {
            updateSpeedometer(testSpeedometer, testCar);
            expect(testSpeedometer.innerText).toBe('0');
        });
        it('Speedometer element should have an innerText of \'10\' if the car\'s speed is 10.', () => {
            testCar.accelerate();
            updateSpeedometer(testSpeedometer, testCar);
            expect(testSpeedometer.innerText).toBe('10');
        });

    });
    describe('makeButtonIntoAccelerator() makes a button into an accelerator.', () => {
        beforeEach(() => {
            testAccelerator.click();
        })
        it('Should update speed of car after accelerator is clicked.', () => {
            expect(testCar.getSpeed()).toBe(10);
        });
        it('Should update testSpeedometer after testAccelerator is clicked.', () => {
            expect(testSpeedometer.innerText).toBe('10');
        })

    })
    describe('makeButtonIntoBrake() makes a button into a brake.', () => {
        let testBrake = document.createElement('button');

        it('Should update speed of car after brake is clicked.', () => {
            makeButtonIntoBrake(testBrake, testSpeedometer, testCar);
            testAccelerator.click();
            testBrake.click();
            expect(testCar.getSpeed()).toBe(0);

        })
        it('Should update testSpeedometer after testBrake is clicked', () => {
            makeButtonIntoBrake(testBrake, testSpeedometer, testCar);
            testAccelerator.click();
            testBrake.click();
            expect(testSpeedometer.innerText).toBe('0')
        });
    });
    describe('updateCheckEngineLight() change an elements innerText to represent engine health.', () => {
        let testCheckEngineLight;

        beforeEach(() => {
            testCheckEngineLight = document.createElement('div');
        })

        it('Check Enginge Light element innerText is \'\' when engineHealth is 100', () => {
            updateCheckEngineLight(testCheckEngineLight, testCar);
            expect(testCheckEngineLight.innerText).toBe('');
        })
        it('Check Engine Light should come on (innerText = \'CHECK ENGINE\') if engineHealth is less than 100', () => {
            while (testCar.getSpeed() < 70) {
                testCar.accelerate();
            }
            updateCheckEngineLight(testCheckEngineLight, testCar);
            expect(testCheckEngineLight.innerText).toBe('CHECK ENGINE')
        })
    });
});
describe('The app.js file wires the elements of the Car.js and index.html files together.', () => {
    const accelerator = document.querySelector('.floorboard__accelerator');
    const speedometer = document.querySelector('.dashboard__speedometer');
    const brake = document.querySelector('.floorboard__brake');
    const checkEngineLight = document.querySelector('.dashboard__check-engine-light')
    beforeEach(()=>{
        appCar.reset();
        updateSpeedometer(speedometer,appCar);
    });
    it('Hitting the accelerator once should increase the displayed speed to 10.', () => {
        accelerator.click();
        expect(speedometer.innerText).toBe('10');
    });

    it('Hitting the brake after the accelator should display 0 on the speedometer', () => {
        accelerator.click();
        brake.click();
        expect(speedometer.innerText).toBe('0');

    });
    it('Check Engine Light comes on when the car goes fast!', ()=>{
        while(speedometerElement.innerText!=='70'){
            accelerator.click();
        }
        expect(checkEngineLight.innerText).toBe('CHECK ENGINE');
    })
});