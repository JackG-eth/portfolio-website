import React from "react";
import timelineElements from "./timelineElements";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const TimelineDisplay = () => {
	let workIconStyles = { background: "#dab600" };
	let schoolIconStyles = { background: "#dab600" };

	return (
		<div>
			<h1 className="title">Timeline</h1>
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
							dateClassName="date"
							iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
						>
							<h3 className="vertical-timeline-element-title">
								{element.title}
							</h3>
							<h5 className="vertical-timeline-element-subtitle">
								{element.location}
							</h5>
							<p id="description">{element.description}</p>
							{showButton && (
								<a
									className={`button ${
										isWorkIcon ? "workButton" : "schoolButton"
									}`}
									href="/"
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
