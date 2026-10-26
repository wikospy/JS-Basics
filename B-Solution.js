const tasks = [
    { task: "wake up at 6am", done: false },
    { task: "Study 2hrs", done: true },
    { task: "do coding for 3hrs", done: true }
];
console.log(tasks[0]);

for (let i = 0; i < tasks.length; i += 1) {
    const task = tasks[i];
    if (task.done) {
        console.log(`Done : ${task.task} `);
    } else if (!task.done) {
        console.log(`Not done : ${task.task}`);
    }
}
/*Here console.log() prints { task: "wake up at 6am", done: false } 
becuase its comes in 0 index is written tasks[0] and for 
which will run till tasks length as written tasks.lenght and 
we made new thing task which is equal to task[i] means
it will have all task as for making it run many times and i
becoming 1, 2, 3. now if here if we see first one which is
false and its written task.done it will convert into false 
and goes to else if and here ! is given which convert false into
true thats why the console.log() will printed and after that 
others will too. */