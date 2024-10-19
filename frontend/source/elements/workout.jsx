import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        
        <div className="bootcamps">
          <div>
            <h4>Fit Body Boot Camp</h4>
            <p>
            30-minute high-intensity workouts.
            <br />
            Fat-burning and full-body workouts.
            </p>
          </div>
          <div>
            <h4>Zumba Fitness</h4>
            <p>
            Dance fitness classes featuring Latin and international music.
            <br />
            Routines incorporate interval training for cardiovascular benefits.
            </p>
          </div>
          <div>
            <h4>High-intensity Interval Training</h4>
            <p>
            HIIT exercises involve short bursts of intense movements followed by brief periods of rest or low-intensity activity. 
            </p>
          </div>
          <div>
            <h4> Strength Training</h4>
            <p>
            Strength training often involves lifting weights or using resistance machines which  is crucial for overall functional fitness promoting muscle maintenance
            </p>
          </div>
          <div>
            <h4>Flexibility and Stretching Exercise</h4>
            <p>
            Activities like yoga, Pilates, and static stretching focus on improving flexibility and joint range of motion.
            </p>
          </div>
          <div>
            <h4>Yoga</h4>
            <p>Yoga is an ancient practice that involves physical poses, concentration, and deep breathing.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions; 
