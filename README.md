# Beware: The Rise of the Rat King

Work in progress project for the Rise of the Rat King Roblox experience!

## Getting Your Computer Set Up

TODO

### VSCode Installation

Our team is *highly* encouraged to use [Visual Studio Code (VSCode)](https://code.visualstudio.com/download), a code editor that will give you lots of tools to help smooth over a lot of the friction that comes with writing code.

### Running on Windows

Many of the utilities and programs written in this project are intended to be run on [UNIX Machines](https://www.spiceworks.com/tech/tech-101/articles/unix-linux-windows-comparison/), which means some extra steps need to be taken to run the development environment on a Windows computer.

Visual Studio Code comes with a feature called [Development Containers](https://code.visualstudio.com/docs/devcontainers/containers), which will allow you to emulate a small Linux operating system on your Windows computer.

> If you are running on a Mac or Linux computer, you can skip this section and continue on to [setting up the repository]().

#### Windows Step 1: Download Windows Subsystem for Linux

**Windows Subsystem for Linux** is a program that allows you to run Linux operating systems like any other program on your computer. It's a fairly quick setup, but requires going into the **Windows Command Line**.

1. Run the Windows Command Prompt as an administrator.
    - You can open up a new Command Prompt window by searching "Command" or "Terminal" in your Windows start menu.
    - **Be sure to run the Command Prompt as an administrator(!)** by right-clicking the Command Prompt in the Start Menu and selecting "Run As Administrator"
2. Run the installation command for WSL.
    - In the Command Prompt, type:

```ps
wsl --install
```

3. Wait for the command to complete. If the Command Prompt asks any questions, type `Y`, and then press Enter.

At this point, you can wait for the installation to complete and then exit the Command Prompt.

> If you are comfortable using Windows Subsystem for Linux by itself, you can stop here. If you'd prefer a more straightforward developer experience, continue on to [Step 2: Install Docker](#windows-step-2-install-docker)

#### Windows Step 2: Install Docker

[Docker](https://www.youtube.com/watch?v=rOTqprHv1YE) is an application that organizes applications on your computer that are using different Operating Systems. It is useful for making sure that the applications you're working on can't affect anything else on your system. It is also the application that Visual Studio Code uses to organize your Development Containers!

Use the following steps to install Docker:

1. Download [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/) from the Docker website.
2. Start the Docker installer by executing the `.exe` file you downloaded from the website.
3. Once the Docker installation is complete, press "Start Docker" on the Docker Desktop window

At this point, you are free to close the Docker Desktop window. Docker will continue running as a background process until you stop it from Docker Desktop or restart your computer.

#### Windows Step 3: Start a New Dev Container

Now that you have WSL and Docker installed, we can install the code for this project!

If you haven't already, download & install [Visual Studio Code](#vscode-installation) on your computer.

When you first start Visual Studio Code, you'll be greeted by a Welcome page. From here, we can download the code for this project.

1. Navigate to the bottom left of the Visual Studio Code window and click on the blue square with two arrows.
2. On the dropdown menu at the top-middle of the screen, click **"Clone Repository in Container Volume"**
3. On the dropdown, click **"Clone a repository from GitHub in a Container Volume"**
    - At this point, you may be prompted to log into GitHub. To log into GitHub, a new tab will open up in your browser. From there, log into GitHub just like you normally would. Once you've logged in, return to Visual Studio Code.
    - If the dropdown menu is no longer there after you've logged in, repeat steps 1, 2, and 3 again.
4. You can now access GitHub Repositories from VSCode. To clone this repository, type in the location of this repository, `chaoticgoodcomputing/rise-of-the-rat-king`, into the box at the top of the dropdown and press Enter.
    - If it asks you for a branch name, select `main` and press Enter to continue.

At this point, your new Development Container will begin to build! This process may take awhile, so we advise that you grab your favorite snack.

If you would like to make sure the process hasn't frozen, you can click "Show Logs" on the small pop-up at the bottom-right of your screen.

#### Setting Up Your Repository
