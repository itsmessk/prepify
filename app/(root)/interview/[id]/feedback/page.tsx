import React from 'react';
import { getCurrentUser } from "@/lib/actions/auth.actions";
import { getFeedbackByInterviewId, getInterviewById } from "@/lib/actions/general.actions";
import { redirect } from "next/navigation";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import {Button} from "@/components/ui/button";


const page = async ({ params }: RouteParams) => {
    const { id } = await params;
    const user = await getCurrentUser();
    if (!user) {
        redirect('/');
    }
    const interview = await getInterviewById(id);
    if (!interview) {
        redirect('/');
    }
    const feedback = await getFeedbackByInterviewId({
        interviewId: id,
        userId: user.id!,
    });

    const isFeedbackStrengthAvailable = feedback?.strengths.length > 0;
    console.log(feedback);

    return (
        <div>
            <section className="section-feedback">
                <div className={"flex flex-row justify-center"}>
                    <h1 className={"text-4xl font-semibold"}>
                        Feedback on the Interview -
                        <span className={"capitalize"}> {interview.role} interview</span>
                    </h1>
                </div>

                <div className={"flex flex-row justify-center"}>
                    <div className={"flex flex-row gap-6"}>
                        <div className={"flex flex-row items-center gap-2"}>
                            <Image src={"/star.svg"} alt={"star"} width={22} height={22}/>
                            <p>
                                Overall Impression: {" "}
                                <span className={"text-primary-100 font-semibold"}>
                                    {feedback?.totalScore}
                                </span>
                                /100
                            </p>
                        </div>
                        <div className={"flex flex-row items-center gap-2"}>
                            <Image src={"/calendar.svg"} alt={"createdAt"} width={22} height={22}/>
                            <span className={"text-primary-100"}>
                                {feedback?.createdAt ? dayjs(feedback.createdAt).format("MMM DD, YYYY h:mm A") :
                                null}
                            </span>
                        </div>
                    </div>
                </div>

                <p>{feedback?.finalAssessment}</p>
                <div className={"flex flex-col gap-3"}>
                    <h2>
                        Breakdown of the Interview:
                    </h2>
                    {feedback?.categoryScores.map((category, index) => (
                        <div key={index}>
                            <p className={"font-bold"}>
                                {index + 1} . {category.name} ({category.score}/ 100)
                            </p>
                            <p>{category.comment}</p>
                        </div>
                    ))}
                </div>

                <div className={"flex flex-col gap-4"}>
                    <h3>Strengths</h3>
                    <ul>

                        {isFeedbackStrengthAvailable ? feedback?.strengths.map((strength, index) =>
                            (<div key={index}>
                                    <li>{strength}</li>
                            </div>
                            )):
                        <p>No Strengths Found...</p>}
                    </ul>
                </div>

                <div className={"flex flex-col gap-4"}>
                    <h3>Areas for Improvement</h3>
                    <ul>
                        {feedback?.areasForImprovement.map((improvements, index) => (
                            <li key={index}>{improvements}</li>
                        ))}
                    </ul>
                </div>

                <div className={"buttons"}>
                    <Button className={"btn-secondary flex-1"}>
                        <Link href={'/'} className={"flex w-full justify-center"}>
                            <p className={"text-sm font-semibold text-primary-200 text-center"}>
                                Back to Dashboard
                            </p>
                        </Link>
                    </Button>
                    <Button className={"btn-primary flex-1"}>
                        <Link href={`/interview/${id}`} className="flex w-full justify-center">
                            <p className="text-sm font-semibold text-black text-center">
                                Retake Interview
                            </p>
                        </Link>
                    </Button>
                </div>






            </section>
        </div>
    );
};

export default page;
