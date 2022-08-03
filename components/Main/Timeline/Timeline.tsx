import React from "react";
import timelineElements from "./timelineElements";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineDisplay = () => {
	let workIconStyles = { background: "#dab600" };
	let schoolIconStyles = { background: "#06D6A0" };

	return (
		<div id="timeline" className="pt-20 ">
			<VerticalTimeline>
				{timelineElements.map((element) => {
					let isWorkIcon = element.icon === "work";
					let showButton =
						element.buttonText !== undefined &&
						element.buttonText !== null &&
						element.buttonText !== "";

					return (
						<VerticalTimelineElement
							key={element.id}
							date={element.date}
							dateClassName="date text-white"
							iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
							icon={
								isWorkIcon ? (
									<div className="flex h-full w-full items-center justify-center">
										<img className="h-8 w-8" src="/static/img/work.svg" />
									</div>
								) : (
									<div className="flex h-full w-full items-center justify-center">
										<img className="h-8 w-8" src="/static/img/school.svg" />
									</div>
								)
							}
						>
							<h3 className="vertical-timeline-element-title pb-2 text-lg font-black">
								{element.company}
							</h3>
							<h3 className="vertical-timeline-element-title pb-2">
								{element.title}
							</h3>

							<h5 className="vertical-timeline-element-subtitle">
								{element.location}
							</h5>
							<p className="pb-4" id="description">
								{element.description}
							</p>

							{showButton && (
								<a
									className={`button ${
										isWorkIcon ? "workButton" : "schoolButton"
									}`}
									href={element.link}
								>
									{element.buttonText}
								</a>
							)}
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
};

export default TimelineDisplay;
