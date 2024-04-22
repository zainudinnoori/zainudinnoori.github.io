import AssignmentList from './AssignmentList.js'
import Navigation from './Navigation.js'
export default {
        components: {
            AssignmentList, Navigation
        },
        template: `
            <navigation @add="storeNew"></navigation>
            <div class="flex justify-center gap-10 mt-10 ">
                <assignment-list :assignments=filters.todo title="Todo" ></assignment-list>
                
                    <div class="divider lg:divider-horizontal min-h-52"></div> 

                <assignment-list :assignments=filters.completed title="Completed" @toggleDisplay="toggleDisplay"></assignment-list>
            </div>
        `,
        data(){
            return { 
                assignments: [
                {name: "Hunt Down the Wild Bugs!", completed: false, id: 1},
                {name: "Send Your Variables on a Beach Trip.", completed: false, id: 2},
                {name: "Choreograph a Dance Routine for Each Function.", completed: false, id: 3},
                {name: "Duel with Syntax Errors in the Wild West.", completed: false, id: 4},
                {name: "Explore the Dungeon of SQL Queries", completed: false, id: 5},
                {name: "Rescue Princess API from the Tower of Legacy Code.", completed: false, id: 6},
            ],
            new_assignment : "",
            display : true 
        }},
        methods:{
            storeNew(name){
                this.assignments.push({
                    name: name, 
                    completed: false, 
                    id: this.assignments.length + 1})
            },
            toggleDisplay(flag){
                this.display = ! flag;
            }
        },
        computed:{
            filters() {
                return {
                    todo : this.assignments.filter(assignment => ! assignment.completed),
                    completed : this.assignments.filter(assignment => assignment.completed)
                }
            }
        },
        
}