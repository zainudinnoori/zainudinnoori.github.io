export default {
    template: `
        <li>
            <label class="label cursor-pointer"> {{ assignment.name }} 
                <input type="checkbox" class="mx-4 checkbox checkbox-primary" v-model="assignment.completed">
            </label>
        </li>
    `,
    props:{
        assignment : Object
    }
}