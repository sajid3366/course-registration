Add at least 3 Project features

=> User can select any course by clicking select button.
=> After clicking select button user can see the course title, credit hour of that course and also can see how many credit hour left.
=> User can not select a course multiple time, if user want to select a course multiple time then react tostily shows a message.


Discuss how you managed the state in your assignment project.

=> I use side effect as useEffect for fetch data from data.json file and set those data into setCarts which is a useState hooks in Carts.jsx.
=> After fetching data I use useState hook in App.jsx and set the initial value as an empty array. Then set a new array in that useState. 
=> I also use in App.jsx useState for credit hour, total price and remaining credit hour. Remaining credit hour useState initial value is 20.