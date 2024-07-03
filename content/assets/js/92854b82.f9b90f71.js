"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68327],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=i.createContext({}),s=function(e){var t=i.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(g.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,g=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,d=u["".concat(g,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(d,l(l({ref:t},c),{},{components:n})):i.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var r={};for(var g in t)hasOwnProperty.call(t,g)&&(r[g]=t[g]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=n(58168),o=(n(96540),n(15680));const a={id:"setup-git",title:"Setting up Git for maintenance of Pulsar"},l=void 0,r={unversionedId:"setup-git",id:"setup-git",title:"Setting up Git for maintenance of Pulsar",description:"Git configuration",source:"@site/contribute/setup-git.md",sourceDirName:".",slug:"/setup-git",permalink:"/contribute/setup-git",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/setup-git.md",tags:[],version:"current",lastUpdatedBy:"Yuwei Sung",lastUpdatedAt:1720006309,formattedLastUpdatedAt:"Jul 3, 2024",frontMatter:{id:"setup-git",title:"Setting up Git for maintenance of Pulsar"},sidebar:"sidebarDevelopment",previous:{title:"Setting up an IDE",permalink:"/contribute/setup-ide"},next:{title:"Debugging",permalink:"/contribute/setup-debugging"}},g={},s=[{value:"Git configuration",id:"git-configuration",level:2},{value:"Tooling",id:"tooling",level:3},{value:"Install <code>gh</code> command line tool for GitHub",id:"install-gh-command-line-tool-for-github",level:4},{value:"Optional: Install <code>tig</code> command line UI for git",id:"optional-install-tig-command-line-ui-for-git",level:4},{value:"Git configuration tuning",id:"git-configuration-tuning",level:3},{value:"Checking out each Pulsar maintenance branch in a separate working directory",id:"checking-out-each-pulsar-maintenance-branch-in-a-separate-working-directory",level:3},{value:"Merge conflict resolution tooling",id:"mergetool",level:2},{value:"kdiff3 configuration on MacOS",id:"kdiff3-configuration-on-macos",level:3},{value:"kdiff3 configuration on Linux",id:"kdiff3-configuration-on-linux",level:3},{value:"Using the mergetool kdiff3",id:"using-the-mergetool-kdiff3",level:3},{value:"Git revert and commit amending tooling",id:"git-revert-and-commit-amending-tooling",level:3},{value:"Using IntelliJ for cherry-picking and merge conflict resolution.",id:"using-intellij-for-cherry-picking-and-merge-conflict-resolution",level:3},{value:"Useful links",id:"useful-links",level:3}],c={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,i.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"git-configuration"},"Git configuration"),(0,o.yg)("h3",{id:"tooling"},"Tooling"),(0,o.yg)("h4",{id:"install-gh-command-line-tool-for-github"},"Install ",(0,o.yg)("inlineCode",{parentName:"h4"},"gh")," command line tool for GitHub"),(0,o.yg)("p",null,"Installing with ",(0,o.yg)("inlineCode",{parentName:"p"},"brew"),", for other package managers, follow instructions at ",(0,o.yg)("a",{parentName:"p",href:"https://cli.github.com/"},"https://cli.github.com/"),". "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"brew install gh\n")),(0,o.yg)("p",null,"After installing authenticate to GitHub"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"gh auth login\n")),(0,o.yg)("h4",{id:"optional-install-tig-command-line-ui-for-git"},"Optional: Install ",(0,o.yg)("inlineCode",{parentName:"h4"},"tig")," command line UI for git"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"tig")," is handy for viewing the git log and it can also be used for staging files and assisting with ",(0,o.yg)("inlineCode",{parentName:"p"},"git")," command line usage."),(0,o.yg)("p",null,"MacOS"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"brew install tig\n")),(0,o.yg)("p",null,"Ubuntu Linux"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"sudo apt install tig\n")),(0,o.yg)("p",null,"There are also other more feature rich alternatives such as ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/extrawurst/gitui"},(0,o.yg)("inlineCode",{parentName:"a"},"gitui"))," or ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/jesseduffield/lazygit"},(0,o.yg)("inlineCode",{parentName:"a"},"lazygit")),"."),(0,o.yg)("h3",{id:"git-configuration-tuning"},"Git configuration tuning"),(0,o.yg)("p",null,"Increase default renamed file detection limit with mergetool and difftool"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"git config --global merge.renameLimit 2048\ngit config --global diff.renameLimit 2048\n")),(0,o.yg)("p",null,"Enable ",(0,o.yg)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Tools-Rerere"},"rerere"),', "reuse recorded resolution" for Git.'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"git config --global rerere.enabled true\n")),(0,o.yg)("p",null,"Notice! In some cases, it might be useful to disable rerere after an invalid merge resolution. In that case you will need to use ",(0,o.yg)("inlineCode",{parentName:"p"},"git rerere forget file")," to forget the merge result."),(0,o.yg)("h3",{id:"checking-out-each-pulsar-maintenance-branch-in-a-separate-working-directory"},"Checking out each Pulsar maintenance branch in a separate working directory"),(0,o.yg)("p",null,"For maintaining Pulsar, it is handy to have all maintenance branches checked out in separate working directories"),(0,o.yg)("p",null,"Check out Pulsar repository"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'# assuming that GitHub autentication has been configured with "gh auth login"\ngit checkout https://github.com/apache/pulsar\ncd pulsar\n# add your forked repository as a remote, you can have your own preferences how to name the remotes\ngit remote add forked https://github.com/your_github_id/pulsar\n')),(0,o.yg)("p",null,"Add separate working directories that share the local git repository"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"for branch in branch-3.3 branch-3.2 branch-3.1 branch-3.0; do \n   git worktree add ../pulsar-$branch $branch\ndone\n")),(0,o.yg)("p",null,"After this you would have these directories in the same level as the original checked out ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar")," directory:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"pulsar-branch-3.3\npulsar-branch-3.2\npulsar-branch-3.1\npulsar-branch-3.0\n")),(0,o.yg)("p",null,"There a limitation that each branch can only be checked out in one working directory at a time. If that becomes a problem you could temporarily detach the current branch in the working directory with ",(0,o.yg)("inlineCode",{parentName:"p"},"git commit --detach HEAD")," command."),(0,o.yg)("h2",{id:"mergetool"},"Merge conflict resolution tooling"),(0,o.yg)("p",null,"For Apache Pulsar core developers, handling git merge conflict resolution is necessary.\nTo efficiently resolve merge conflicts, setting up tools that assist in visualizing these conflicts and resolving them is essential."),(0,o.yg)("p",null,"For developers starting to use automated tools to resolve merge conflicts during cherry-picking, IntelliJ is a recommended option. It offers excellent tooling, but its integration with a command-line workflow is not seamless. It performs well when you initiate the cherry-picking process in IntelliJ and handle the merge conflict resolution within the same environment. However, resolving a merge conflict often involves multiple steps, including reverting and amending changes until a satisfactory resolution is achieved. In many cases, using a combination of tools may be more effective than relying solely on IntelliJ for all required operations."),(0,o.yg)("p",null,"For more advanced users who use ",(0,o.yg)("inlineCode",{parentName:"p"},"git")," on the command line, setting up the ",(0,o.yg)("inlineCode",{parentName:"p"},"git mergetool")," is recommended.\nHere's an example of how to set up ",(0,o.yg)("inlineCode",{parentName:"p"},"kdiff3")," as a mergetool."),(0,o.yg)("h3",{id:"kdiff3-configuration-on-macos"},"kdiff3 configuration on MacOS"),(0,o.yg)("p",null,"Install ",(0,o.yg)("inlineCode",{parentName:"p"},"kdiff3"),"'s cask version with ",(0,o.yg)("inlineCode",{parentName:"p"},"brew"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# important! install the cask version of kdiff3\nbrew install --cask kdiff3\n")),(0,o.yg)("p",null,"Configure ",(0,o.yg)("inlineCode",{parentName:"p"},"kdiff3")," as the mergetool and difftool of git"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"git config --global mergetool.kdiff3.path /Applications/kdiff3.app/Contents/MacOS/kdiff3\ngit config --global mergetool.kdiff3.args '$base $local $other -o $output'\ngit config --global mergetool.kdiff3.trustExitCode false\ngit config --global merge.tool kdiff3\ngit config --global difftool.kdiff3.path /Applications/kdiff3.app/Contents/MacOS/kdiff3\ngit config --global difftool.kdiff3.args '$base $local $other -o $output'\ngit config --global difftool.kdiff3.trustExitCode false\ngit config --global diff.guitool kdiff3\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"kdiff3")," version 1.11.1 contains ",(0,o.yg)("a",{parentName:"p",href:"https://bugs.kde.org/show_bug.cgi?id=487338"},"bug #487338"),". You might want to install kdiff3 1.10.7 from ",(0,o.yg)("a",{parentName:"p",href:"https://download.kde.org/stable/kdiff3/"},"https://download.kde.org/stable/kdiff3/")," until the issue is resolved."),(0,o.yg)("h3",{id:"kdiff3-configuration-on-linux"},"kdiff3 configuration on Linux"),(0,o.yg)("p",null,"Install ",(0,o.yg)("inlineCode",{parentName:"p"},"kdiff3")," from your package manager. For example, on Ubuntu:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"sudo apt install kdiff3\n")),(0,o.yg)("p",null,"Configure ",(0,o.yg)("inlineCode",{parentName:"p"},"kdiff3")," as the mergetool and difftool of git"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"git config --global mergetool.kdiff3.path /usr/bin/kdiff3\ngit config --global merge.tool kdiff3\ngit config --global difftool.kdiff3.path /usr/bin/kdiff3\ngit config --global diff.guitool kdiff3\n")),(0,o.yg)("h3",{id:"using-the-mergetool-kdiff3"},"Using the mergetool kdiff3"),(0,o.yg)("p",null,"If any merge conflicts arise after a cherry-pick, merge, or rebase, you should run ",(0,o.yg)("inlineCode",{parentName:"p"},"git mergetool")," to resolve them.\nYou can run ",(0,o.yg)("inlineCode",{parentName:"p"},"git mergetool")," anytime, as the command will return when there are no conflicts to resolve."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"kdiff3")," tool isn't the most user-friendly tool, and it takes time to get accustomed to its workings.\nThere's commentary on mergetools ",(0,o.yg)("a",{parentName:"p",href:"https://www.eseth.org/2020/mergetools.html"},"in this blog post")," that could help\nyou understand what the tools do and how merges are visualized in different tools.\nOne of the advantages of ",(0,o.yg)("inlineCode",{parentName:"p"},"kdiff3")," is that it contains a custom merge algorithm which can resolve some conflicts\nwithout requiring a choice. In some cases, there may be chances for mistakes, but these are rare and could also occur when\nmanually choosing the resolution. The resolution will need to be verified in any case."),(0,o.yg)("p",null,"Tips for Using ",(0,o.yg)("inlineCode",{parentName:"p"},"kdiff3")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"When the merge conflict resolution process begins, a view with three panes and a split pane at the bottom of the window will appear.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},'The left pane displays the diff from the common version of the file. This can be confusing and is often not very useful. You can hide it by deselecting "Window -> Show Window A".'),(0,o.yg)("li",{parentName:"ul"},"The middle pane shows the local version."),(0,o.yg)("li",{parentName:"ul"},"The right pane shows the remote version."),(0,o.yg)("li",{parentName:"ul"},"The bottom pane is the output, which is the result of the merge. You can also make manual edits in this pane to resolve conflicts manually."))),(0,o.yg)("li",{parentName:"ul"},"It's beneficial to learn how to navigate to the next and previous merge conflict and how to choose the resolution using keyboard shortcuts.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"On MacOS, you may need to remap some of the keyboard shortcuts to improve usability. This is especially necessary when using an external keyboard.")))),(0,o.yg)("h3",{id:"git-revert-and-commit-amending-tooling"},"Git revert and commit amending tooling"),(0,o.yg)("p",null,"Resolving merge conflicts can sometimes be more complex with merge tools than simply reverting some changes and modifying the original source code in an IDE. This process may involve multiple steps, including reverting and amending changes to the merge commit. The merge commit should also incorporate the necessary changes for backporting.\nIn many cases, it is also necessary to fix the import statements in an IDE and amending those changes to the merge commit."),(0,o.yg)("p",null,"For this purpose, the ",(0,o.yg)("inlineCode",{parentName:"p"},"git gui")," tool is excellent. It allows for partial reverts to previous commits and makes it easy to amend additional changes to the latest commit, all with clear visualization."),(0,o.yg)("p",null,"Installing the ",(0,o.yg)("inlineCode",{parentName:"p"},"git gui")," tool:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"# on MacOS\nbrew install git-gui\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'# on Linux install "git-gui" from your package manager, example of Ubuntu\nsudo apt install git-gui\n')),(0,o.yg)("p",null,"There are many tools available for this purpose, but ",(0,o.yg)("inlineCode",{parentName:"p"},"git gui")," is one of the simplest and most effective."),(0,o.yg)("h3",{id:"using-intellij-for-cherry-picking-and-merge-conflict-resolution"},"Using IntelliJ for cherry-picking and merge conflict resolution."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.jetbrains.com/help/idea/apply-changes-from-one-branch-to-another.html#cherry-pick"},"Cherry-pick separate commits")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mSfq1SoMocg"},"Resolving Git Merge Conflicts: The Easy Way"))),(0,o.yg)("h3",{id:"useful-links"},"Useful links"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.eseth.org/2020/mergetools.html"},"Comparison of git mergetools")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_file_comparison_tools#General"},"Comparison of file comparison tools")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://git-scm.com/downloads/guis"},"Git GUI Clients"))))}p.isMDXComponent=!0}}]);