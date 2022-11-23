<script lang="ts">
    import Project from "./Project.svelte";
</script>

<div id="portfolio" class="portfolio">
    <ul>
        <li>
            <Project header="Right now..."
                     description="I'm working as a fullstack developer in Kazan"/>
        </li>
        <li>
            <Project date="June 2022"
                     header="Portfolio website"
                     description="This is a website you are currently on."
                     used_technologies="TypeScript, Svelte"
                     github_link="https://github.com/osx11/osx11.github.io"/>
        </li>
        <li>
            <Project date="April 2022"
                     header="Market emulation"
                     description="This is an artificial project. The application was developed with the aim of practical
                     application of design patterns and learning to design the architecture of the application.
                     The main task was to create an application in which it would be easy to add new functions
                     (in my case, such functions, for example, are console commands for which you need to check
                     the syntax, process and report the result). In addition, the project was also aimed at
                     developing communication skills, as this is a team project. The team and I thought about the
                     architecture, I wrote the code, and we wrote a progress report."
                     used_technologies="Pure Java"
                     github_link="https://github.com/osx11/SSAD_Market"/>
        </li>
        <li>
            <Project date="April 2021"
                     header="Flight Statistics"
                     description="As I am fond of aviation, the project was created to conveniently store the history of my
                     flights in flight simulators. It has a user-friendly interface with a date-time scale so
                     that you can visually see the duration of any flight. It is able to record the flight
                     through the connection with the flight simulator. You can make a pre-registration of a
                     future flight and see detailed information about it. Automatic estimation of flight distance
                     and conversion of 4-letter airport code to airport city using remote database API. The
                     graphical interface was created using the PyQT5 library, without any additional graphical
                     programs."
                     used_technologies="Python, Peewee (ORM), Matplotlib, Shapefiles, PyQT5"
                     github_link="https://github.com/osx11/FlightStatistics"/>
        </li>
        <li>
            <Project date="April 2020"
                     header="Sentiment Analysis"
                     description="The project was developed for presentation at a scientific and practical conference.
                     Although I do not specialize in neural networks and machine learning, the project shows that
                     I am able to use even a technology that I have never touched before. An auxiliary
                     questionnaire website was also created for the project. The program can predict the
                     emotional coloring of the text both by entering text into the corresponding line, and by
                     reading a lot of texts from a file and evaluating each of them separately."
                     used_technologies="Python, Keras, Django, PyQT5"
                     github_link="https://github.com/osx11/Sentiment-analysis"/>
        </li>
        <li>
            <Project date="February 2019"
                     header="Complaints and Ban Appeals System"
                     description="An active project, originally developed to accept applications within an online game, now
                     has many purposes. Currently used by real people for two years now, maintained by me.
                     Implemented functions: sending/reviewing complaints/appeals, personnel reporting, work with
                     personnel, personnel ranks, remote execution of commands, access to logs on a remote server.
                     The website is associated with the online game and the remote server in various ways and can
                     access them to fulfill the user's requests."
                     used_technologies="Python, Django, Apache, WSGI, Docker, SQLite"
                     github_link="https://github.com/osx11/MSCaBAS"/>
        </li>
        <li>
            <Project date="June 2019"
                     header="An RPG plugin for online game"
                     description="An active project, used by hundreds of people daily. The project is the introduction of an
                     RPG component into a popular online game. The project rather shows the ability to think
                     through a complex complex system with a large number of relationships. Continues to be
                     developed and maintained at the present time."
                     used_technologies="Java, Bukkit"
                     github_link="https://github.com/osx11/MagicStoreLevels"/>
        </li>
    </ul>
</div>
