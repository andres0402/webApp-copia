export class Project {
    constructor(
        public id: Number,
        public title: string,
        public project_description: string,
        public initial_date: string,
        public final_date: string,
        public project_status: string,
        public project_type: string,
        public user_id: Number
      ) {}
}
