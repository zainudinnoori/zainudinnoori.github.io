import Assignment from "./Assignment.js"
export default {
    components: {
        Assignment
    },
    template: `
        <section class="mt-0 basis-1/3">
            <h1 class="flex items-center gap-4 text-3xl mb-3"> {{ title }} <div class="badge badge-ghost">{{assignments.length}}</div></h1>
            <div class="grid h-64 place-items-center text-base-300 text-2xl" v-if="!assignments.length">Wow! Empty ∅</div>
            <ul>
                <assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment>
            </ul>
        </section>
    `,
    props: {
        assignments : Array,
        title: String
    }

}