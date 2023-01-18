/**
 *
 */
const mongoose = require('mongoose');

const WeekSchema = new mongoose.Schema(
    {
        //Is this a "master" week
        isMaster: {
            type: Boolean,
            required: true,
            default: false,
        },

        //Clinical skills assessment form
        skills_assessment: {
            //Array of "sections" in this form
            sections: [
                {
                    //The name of the section (e.g. Practice Orientation or Lensometry)
                    section_name: {
                        type: String,
                        required: true,
                    },
                    //Array of the different experiences that the student attended
                    experiences: [
                        {
                            //The date of the experience
                            date: Date,
                            //The skills that needed to be completed for this experience
                            skills: [
                                {
                                    //The name of the skill
                                    skill_name: String,
                                    //If the student checked off that it was completed
                                    student_checked: Boolean,
                                    //If the preceptor checked off that it was completed
                                    preceptor_checked: Boolean,
                                },
                            ],
                        },
                    ],
                },
            ],
            //Array of the workplace expectations
            workplace_expectations: [
                {
                    //The name of the expectation
                    expectation: {
                        type: String,
                    },
                    //A short description of the expectation
                    expectation_description: {
                        type: String,
                    },
                    //How the preceptor says the student performed in this expectation
                    student_performance: {
                        type: Number,
                        min: 0,
                        max: 3,
                    },
                },
            ],
        },

        //Self-reflection form
        self_reflection: {},

        //The ID of the student this week belongs to
        student_id: {
            type: String,
        },

        //The ID of the instructor who assigned this week to the student
        instructor_id: {
            type: String,
        },

        //The ID of the preceptor who provides feedback on this week to the student
        preceptor_id: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('WeekSchema', WeekSchema);
