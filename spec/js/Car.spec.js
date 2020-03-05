describe('Car should behave like a car:', () => {
    let underTest;
    beforeEach(() => {
        underTest = new Car();
    })
    describe('Car should go fast, then slow, then stop:', () => {
        describe('When gas goes smash, car goes fast!', () => {
            for (let i = 0; i < 10; i++) {
                it(`Car should increase in speed to ${i*10} when accelerate() is called ${i} times.`, () => {
                    carGoFast(i * 10);
                    expect(underTest.getSpeed()).toBe(i * 10);
                });
            }
        });
        describe('When brake goes stop, car goes stoppy.', () => {
            beforeEach(() => {
                carGoFast(100)
            });
            for (let i = 0; i < 10; i++) {
                it(`Car should decrease in speed ${i*10} when brake() is called ${i} times.`, () => {
                    for (let j = 0; j < i; j++) {
                        underTest.brake();
                    }
                    expect(underTest.getSpeed()).toBe(100 - i * 10);
                });
            }
            it('Car cannot go below zero for speed.', () => {
                underTest = new Car();
                underTest.brake();
                expect(underTest.getSpeed()).toBe(0);
            });
        });
    });
    describe('Car go fast, engine go BOOM!', () => {
        describe('Car engine health goes down if speed is over 60', () => {
            beforeEach(() => {
                carGoFast(60);
            });
            it('Engine health goes down by ten if car is accelerating and speed is going to 70', () => {
                underTest.accelerate();
                expect(underTest.getEngineHealth()).toBe(90);
            });
            it('Engine health goes down by twenty if car is accelerating and speed is going to 80', () => {
                underTest.accelerate();
                underTest.accelerate();
                expect(underTest.getEngineHealth()).toBe(70);
            });
            it('Engine health can\'t go below 0', () => {
                underTest.accelerate();
                underTest.accelerate();
                underTest.accelerate();
                underTest.brake(); - 80
                underTest.accelerate();
                underTest.accelerate();
                expect(underTest.getEngineHealth()).toBe(0);
            });
        });
    });
    it('resetCar() makes car all new again!',()=>{
        carGoFast(100);
        underTest.reset();
        expect(underTest.getEngineHealth()).toBe(100);
        expect(underTest.getSpeed()).toBe(0);
    })
    const carGoFast = (speed) => {
        for (let i = 0; i < speed / 10; i++) {
            underTest.accelerate();
        }
    }
});