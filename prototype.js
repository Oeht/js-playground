const engineerPrototype = {
    type: 'Engineer',
    sayHello() {
        return `Hello, I'm an engineer`;
    }
}

const pandaEngineer = Object.create(engineerPrototype);

console.log(pandaEngineer.sayHello());

//__________________________________________________________________________

const anotherEngineer = Object;

anotherEngineer.sayGoodbye = () => 'Goodbye!';

console.log(anotherEngineer.sayGoodbye());