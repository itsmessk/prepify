import React from 'react';
import dayjs from "dayjs";
import {date} from "zod";

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt} : InterviewCardProps) => {

    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');

    return (
        <div className="card-border w-">

        </div>
    );
};

export default InterviewCard;