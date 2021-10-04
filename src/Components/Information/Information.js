import React from 'react';
import './Information.css';

const Information = () => {
    return (
        <div className="informative-part container">

            {/* Learning important tips  */}
            <h1 className="informative-head">Read It Properly</h1>
            <div className="row">
                <div className="col-md-5 cart">
                    <p> <u>1. Know How You Learn</u> Are you visual learner? Do you learn by hearing? Or by watching someone else demonstrate? Reading? Hands-on? If you recognize your own learning method, you can more effectively apply it during the training process.</p>
                    <p>2. Take an Active Role Most adults need to feel involved and invested. Give the trainer feedback, participate in conversations, ask questions, answer questions put forward by the trainer, read ahead at night as well as review the previous day’s content.</p>

                    <p>
                        3. Learn from Mistakes Many people learn from their mistakes. Rather than be frustrated with difficult content and your own mistakes in the labs, remember that these are a key part of the learning experience.
                    </p>
                    <p>
                        4. Think Real-World Scenarios Adults are so busy that they will unconsciously filter content that they don’t believe will help them immediately. Trainers will attempt to correlate the content to real world situations, but you will often need to do this for yourself. Look behind every task for the reason. When I teach, I refer to this as, “Who Cares?” In other words, why should we care about this task or this technology?
                    </p>

                </div>
                <div className="col-md-5 cart">
                    <p>5. Play Along Learning content is typically problem-centered, meaning that a problem will be presented to you and the purpose behind the lab is to address the problem. This is an attempt by the content author to put the context of the material in a realistic setting. It is important that you “play along” with these scenarios.</p>
                    <p>
                        6. Know Your Resources Be prepared and ready ahead of time. Make sure you have access to your courseware, listen to the trainer (and other students) when they suggest books, web sites, blogs, practice exams, etc. Have a notebook available or access to a word processing application so you can jot down resources. Often, the trainers will hand out a resources sheet at the start of class to get you going.
                    </p>
                    <p>
                        7. Be Aware of the Teaching Process Watch for the trainer to follow a methodology—specifically Tell, Teach, Tell. They will introduce the topic, then teach it, then remind you of what you just learned. Be conscious of this process.
                    </p>
                    <p>
                        8. Be Organized Make sure you’re organized and in a quiet place where you won’t be disturbed. The adult learner is often distracted by all the other real world stuff going on. Try to minimize this.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Information;