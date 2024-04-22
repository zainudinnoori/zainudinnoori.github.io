export default {
    props:{
        assignments: Array,
        display: Boolean
    },
    template: `
        <div class="flex justify-center mb-5">
            <div class="flex gap-40">

                <div class="join">
                    <button class="btn btn-warning" @click="clearAssignments">Clear list</button>

                    <form @submit.prevent="storeNewAssignment">
                        <input class="input input-bordered join-item" placeholder="New assignment" v-model="new_assignment" />
                        <button class="btn join-item rounded-r-full" @click="storeNewAssignment" type="submit">Add</button>                  
                    </form>

                </div>

                <label class="label cursor-pointer">
                    <span class="label-text mx-5">Show Completed tasks</span> 
                    <input type="checkbox" class="toggle" v-model="display" @toggleDisplay="toggleDisplay"/>
                </label>

            </div>
        </div>

        <div class="divider w-300 w-full m-auto my-5"></div>
    `,
    data(){
        return{
            new_assignment : "",
            search_term: ""
        }
    },
    methods:{
        storeNewAssignment(){
            if(this.new_assignment)
                this.$emit('add', this.new_assignment)

            this.new_assignment = "";
        },
        clearAssignments(){
            this.assignments.length = 0
        },
        toggleDisplay(){
            this.$emit('toggleDisplay', display)
        },
        // search(){
        //     this.assignments = this.assignments.filter((el) => el.name.toLowerCase().includes(this.search_term.toLowerCase()));
        // }
    },
}