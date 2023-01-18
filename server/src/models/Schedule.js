/**
 * this module exports a mongoose model of a Schedule document
 * see the provided schedule file in teams > files > PracticumWorkingSchedule_Optician.pdf for more details
 * author: Refaat
 */
const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    // the sum of all weekly totals
    totalScheduledHours: { Type: Integer},
    totlaActualHours: { Type: Integer},

    // basic flag
    isPreceptorApproved: { Type: Boolean, default: false },

    /**
     * the weeks object contains
     *  8 week objects which contains
     *   7 day objects which contains
     *    a scheduledHours & actualHours attributes
     */
    weeks: {
        week1: {
            sunday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            monday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            tuesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            wednesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            thursday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            friday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            saturday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
        },
        week2: {
            sunday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            monday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            tuesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            wednesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            thursday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            friday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            saturday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
        },
        week3: {
            sunday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            monday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            tuesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            wednesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            thursday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            friday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            saturday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
        },
        week4: {
            sunday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            monday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            tuesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            wednesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            thursday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            friday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            saturday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
        },
        week5: {
            sunday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            monday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            tuesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            wednesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            thursday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            friday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            saturday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
        },
        week6: {
            sunday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            monday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            tuesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            wednesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            thursday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            friday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            saturday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
        },
        week7: {
            sunday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            monday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            tuesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            wednesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            thursday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            friday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            saturday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
        },
        week8: {
            sunday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            monday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            tuesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            wednesday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            thursday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            friday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
            saturday: {
                scheduledHours: { Type: Integer },
                actualHours: { Type: Integer }
            },
        }
    }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);