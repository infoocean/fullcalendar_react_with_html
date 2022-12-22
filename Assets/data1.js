const sessions = [
  {
    Session_ID: "110898",
    Session_Name: "nnnn",
    group_class_timeslots: "1215764,30689,1217358,30703,30704",
    Session_Type: "group",
    Resource_Name: "new class room",
    All_Time: [
      {
        ID: "30689",
        post_id: "110194",
        start_date: "2023-05-18",
        end_date: "2023-08-18",
        time_from: "11:00:00",
        time_to: "13:00:00",
        is_repeat_daily: "1",
        is_repeat_weekly: "0",
        does_not_repeat: "0",
        no_of_weeks: "0",
        week_days: "",
        never_stop: "1",
        stop_after: null,
        no_occurences: "0",
        resource_type: "1",
        show_on_calender: "1",
        is_repeat_monthly: "0",
        no_of_weeks_m: "0",
        week_days_m: "",
      },
      {
        ID: "30703",
        post_id: "110194",
        start_date: "2022-12-20",
        end_date: "2023-02-20",
        time_from: "15:00:00",
        time_to: "16:00:00",
        is_repeat_daily: "0",
        is_repeat_weekly: "1",
        does_not_repeat: "0",
        no_of_weeks: "1",
        week_days: "0,1,3",
        never_stop: "1",
        stop_after: null,
        no_occurences: "0",
        resource_type: "1",
        show_on_calender: "1",
        is_repeat_monthly: "0",
        no_of_weeks_m: "1",
        week_days_m: "0,1,3",
      },
      {
        ID: "30704",
        post_id: "110194",
        start_date: "2022-12-21",
        end_date: "2023-02-21",
        time_from: "19:00:00",
        time_to: "20:00:00",
        is_repeat_daily: "0",
        is_repeat_weekly: "0",
        does_not_repeat: "0",
        no_of_weeks: "1",
        week_days: "2,3,4",
        never_stop: "0",
        stop_after: "2023-02-10",
        no_occurences: "0",
        resource_type: "1",
        show_on_calender: "1",
        is_repeat_monthly: "1",
        no_of_weeks_m: "1",
        week_days_m: "2,3,4",
      },
    ],
  },
  // {
  //   Session_ID: "110893",
  //   Session_Name: "test 6666",
  //   group_class_timeslots:
  //     "30608,30609,30610,30611,30612,30613,30614,30634,30636,30637,30638,30640,30641,30657,30658,30659,30683",
  //   Session_Type: "group",
  //   Resource_Name: "new class room",
  //   All_Time: [
  //     {
  //       ID: "30608",
  //       post_id: "110194",
  //       start_date: "2023-02-22",
  //       end_date: "2023-05-22",
  //       time_from: "08:01:00",
  //       time_to: "09:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "1",
  //       does_not_repeat: "0",
  //       no_of_weeks: "1",
  //       week_days: "0,1",
  //       never_stop: "0",
  //       stop_after: "2023-01-31",
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "1",
  //       week_days_m: "0,1",
  //     },
  //     {
  //       ID: "30609",
  //       post_id: "110194",
  //       start_date: "2022-11-09",
  //       end_date: "2023-01-09",
  //       time_from: "09:01:00",
  //       time_to: "10:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "0",
  //       does_not_repeat: "0",
  //       no_of_weeks: "1",
  //       week_days: "4,5",
  //       never_stop: "1",
  //       stop_after: null,
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "1",
  //       no_of_weeks_m: "1",
  //       week_days_m: "4,5",
  //     },
  //     {
  //       ID: "30610",
  //       post_id: "110194",
  //       start_date: "2022-11-09",
  //       end_date: "2023-01-09",
  //       time_from: "08:01:00",
  //       time_to: "16:00:00",
  //       is_repeat_daily: "1",
  //       is_repeat_weekly: "0",
  //       does_not_repeat: "0",
  //       no_of_weeks: "0",
  //       week_days: "",
  //       never_stop: "0",
  //       stop_after: null,
  //       no_occurences: "2",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "0",
  //       week_days_m: "",
  //     },
  //     {
  //       ID: "30611",
  //       post_id: "110194",
  //       start_date: "2022-11-09",
  //       end_date: "2023-01-09",
  //       time_from: "15:00:00",
  //       time_to: "16:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "1",
  //       does_not_repeat: "0",
  //       no_of_weeks: "1",
  //       week_days: "1,2,3",
  //       never_stop: "1",
  //       stop_after: null,
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "1",
  //       week_days_m: "1,2,3",
  //     },
  //     {
  //       ID: "30612",
  //       post_id: "110194",
  //       start_date: "2022-11-10",
  //       end_date: "2023-01-09",
  //       time_from: "08:00:00",
  //       time_to: "04:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "1",
  //       does_not_repeat: "0",
  //       no_of_weeks: "1",
  //       week_days: "1,3,5",
  //       never_stop: "1",
  //       stop_after: null,
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "1",
  //       week_days_m: "1,3,5",
  //     },
  //     {
  //       ID: "30613",
  //       post_id: "110194",
  //       start_date: "2022-11-09",
  //       end_date: "2023-01-09",
  //       time_from: "01:00:00",
  //       time_to: "02:00:00",
  //       is_repeat_daily: "1",
  //       is_repeat_weekly: "0",
  //       does_not_repeat: "0",
  //       no_of_weeks: "0",
  //       week_days: "",
  //       never_stop: "0",
  //       stop_after: "2022-11-16",
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "0",
  //       week_days_m: "",
  //     },
  //     {
  //       ID: "30614",
  //       post_id: "110194",
  //       start_date: "2022-11-09",
  //       end_date: "2023-01-09",
  //       time_from: "08:00:00",
  //       time_to: "04:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "0",
  //       does_not_repeat: "0",
  //       no_of_weeks: "1",
  //       week_days: "1",
  //       never_stop: "0",
  //       stop_after: null,
  //       no_occurences: "2",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "1",
  //       no_of_weeks_m: "1",
  //       week_days_m: "1",
  //     },
  //     {
  //       ID: "30634",
  //       post_id: "110194",
  //       start_date: "2022-11-10",
  //       end_date: "2023-01-09",
  //       time_from: "08:00:00",
  //       time_to: "16:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "0",
  //       does_not_repeat: "0",
  //       no_of_weeks: "1",
  //       week_days: "1,3,5",
  //       never_stop: "0",
  //       stop_after: null,
  //       no_occurences: "2",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "1",
  //       no_of_weeks_m: "1",
  //       week_days_m: "1,3,5",
  //     },
  //     {
  //       ID: "30636",
  //       post_id: "110194",
  //       start_date: "2022-11-10",
  //       end_date: "2023-01-09",
  //       time_from: "08:00:00",
  //       time_to: "04:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "1",
  //       does_not_repeat: "0",
  //       no_of_weeks: "1",
  //       week_days: "1,2,3,4,5",
  //       never_stop: "0",
  //       stop_after: "2022-12-10",
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "1",
  //       week_days_m: "1,2,3,4,5",
  //     },
  //     {
  //       ID: "30637",
  //       post_id: "110194",
  //       start_date: "2022-11-10",
  //       end_date: "2023-01-09",
  //       time_from: "08:00:00",
  //       time_to: "04:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "1",
  //       does_not_repeat: "0",
  //       no_of_weeks: "1",
  //       week_days: "1,2,3,4,5",
  //       never_stop: "0",
  //       stop_after: "2022-11-30",
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "1",
  //       week_days_m: "1,2,3,4,5",
  //     },
  //     {
  //       ID: "30638",
  //       post_id: "110194",
  //       start_date: "2022-11-10",
  //       end_date: "2023-01-09",
  //       time_from: "08:00:00",
  //       time_to: "04:00:00",
  //       is_repeat_daily: "1",
  //       is_repeat_weekly: "0",
  //       does_not_repeat: "0",
  //       no_of_weeks: "0",
  //       week_days: "",
  //       never_stop: "0",
  //       stop_after: null,
  //       no_occurences: "12",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "0",
  //       week_days_m: "",
  //     },
  //     {
  //       ID: "30640",
  //       post_id: "110194",
  //       start_date: "2022-11-10",
  //       end_date: "2023-01-09",
  //       time_from: "08:00:00",
  //       time_to: "04:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "1",
  //       does_not_repeat: "0",
  //       no_of_weeks: "0",
  //       week_days: "",
  //       never_stop: "0",
  //       stop_after: "2022-11-25",
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "0",
  //       week_days_m: "",
  //     },
  //     {
  //       ID: "30641",
  //       post_id: "110194",
  //       start_date: "2022-11-10",
  //       end_date: "2023-01-09",
  //       time_from: "08:00:00",
  //       time_to: "04:00:00",
  //       is_repeat_daily: "1",
  //       is_repeat_weekly: "0",
  //       does_not_repeat: "0",
  //       no_of_weeks: "0",
  //       week_days: "",
  //       never_stop: "0",
  //       stop_after: "2022-11-23",
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "0",
  //       week_days_m: "",
  //     },
  //     {
  //       ID: "30657",
  //       post_id: "110194",
  //       start_date: "2022-11-14",
  //       end_date: "2023-01-14",
  //       time_from: "08:00:00",
  //       time_to: "16:00:00",
  //       is_repeat_daily: "1",
  //       is_repeat_weekly: "0",
  //       does_not_repeat: "0",
  //       no_of_weeks: "0",
  //       week_days: "",
  //       never_stop: "1",
  //       stop_after: null,
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "0",
  //       week_days_m: "",
  //     },
  //     {
  //       ID: "30658",
  //       post_id: "110194",
  //       start_date: "2022-11-14",
  //       end_date: "2023-01-14",
  //       time_from: "14:00:00",
  //       time_to: "16:00:00",
  //       is_repeat_daily: "1",
  //       is_repeat_weekly: "0",
  //       does_not_repeat: "0",
  //       no_of_weeks: "0",
  //       week_days: "",
  //       never_stop: "1",
  //       stop_after: null,
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "0",
  //       week_days_m: "",
  //     },
  //     {
  //       ID: "30659",
  //       post_id: "110194",
  //       start_date: "2022-11-14",
  //       end_date: "2023-01-14",
  //       time_from: "08:00:00",
  //       time_to: "04:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "1",
  //       does_not_repeat: "0",
  //       no_of_weeks: "1",
  //       week_days: "1,2",
  //       never_stop: "1",
  //       stop_after: null,
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "1",
  //       week_days_m: "1,2",
  //     },
  //     {
  //       ID: "30683",
  //       post_id: "110194",
  //       start_date: "2022-11-29",
  //       end_date: "2023-01-29",
  //       time_from: "08:00:00",
  //       time_to: "16:00:00",
  //       is_repeat_daily: "0",
  //       is_repeat_weekly: "1",
  //       does_not_repeat: "0",
  //       no_of_weeks: "1",
  //       week_days: "1",
  //       never_stop: "1",
  //       stop_after: null,
  //       no_occurences: "0",
  //       resource_type: "1",
  //       show_on_calender: "1",
  //       is_repeat_monthly: "0",
  //       no_of_weeks_m: "1",
  //       week_days_m: "1",
  //     },
  //   ],
  // },
  {
    Session_ID: "110069",
    Session_Name: "testing",
    group_class_timeslots: "30580,30679,30680",
    Session_Type: "group",
    Resource_Name: "projecter",
    All_Time: [
      {
        ID: "30580",
        post_id: "110068",
        start_date: "2023-06-28",
        end_date: "2023-09-28",
        time_from: "08:00:00",
        time_to: "09:00:00",
        is_repeat_daily: "1",
        is_repeat_weekly: "0",
        does_not_repeat: "0",
        no_of_weeks: "0",
        week_days: "",
        never_stop: "1",
        stop_after: null,
        no_occurences: "0",
        resource_type: "1",
        show_on_calender: "1",
        is_repeat_monthly: "0",
        no_of_weeks_m: "0",
        week_days_m: "",
      },
      {
        ID: "30679",
        post_id: "110068",
        start_date: "2023-01-31",
        end_date: "2023-03-14",
        time_from: "13:00:00",
        time_to: "15:00:00",
        is_repeat_daily: "0",
        is_repeat_weekly: "1",
        does_not_repeat: "0",
        no_of_weeks: "1",
        week_days: "1",
        never_stop: "1",
        stop_after: null,
        no_occurences: "0",
        resource_type: "1",
        show_on_calender: "1",
        is_repeat_monthly: "0",
        no_of_weeks_m: "1",
        week_days_m: "1",
      },
      {
        ID: "30680",
        post_id: "110068",
        start_date: "2023-03-29",
        end_date: "2023-06-14",
        time_from: "18:00:00",
        time_to: "19:00:00",
        is_repeat_daily: "0",
        is_repeat_weekly: "1",
        does_not_repeat: "0",
        no_of_weeks: "0",
        week_days: "",
        never_stop: "1",
        stop_after: null,
        no_occurences: "0",
        resource_type: "1",
        show_on_calender: "1",
        is_repeat_monthly: "0",
        no_of_weeks_m: "0",
        week_days_m: "",
      },
    ],
  },
  {
    Session_ID: "109227",
    Session_Name: "Test CCW classs",
    group_class_timeslots: "30526",
    Session_Type: "private",
    Resource_Name: "Steven Lieberman",
    All_Time: [
      {
        ID: "30526",
        post_id: "103496",
        start_date: "2022-06-17",
        end_date: "2022-09-17",
        time_from: "08:00:00",
        time_to: "16:00:00",
        is_repeat_daily: "1",
        is_repeat_weekly: "0",
        does_not_repeat: "0",
        no_of_weeks: "0",
        week_days: "",
        never_stop: "1",
        stop_after: null,
        no_occurences: "0",
        resource_type: "1",
        show_on_calender: "1",
        is_repeat_monthly: "0",
        no_of_weeks_m: "0",
        week_days_m: "",
      },
    ],
  },
];
