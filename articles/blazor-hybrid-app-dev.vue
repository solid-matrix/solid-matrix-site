<script setup lang="ts">

</script>
<template>
    <h3>为什么使用Blazor Hybrid？</h3>
    <ol>
        <li><strong>跨平台</strong>：可支持Windows、macOS、Linux、iOS、Android和Web，一套技术栈完成多平台开发；</li>
        <li><strong>语言友好</strong>：C#语言足够优秀，配套Visual Studio对程序员很友好；</li>
        <li><strong>库丰富</strong>：.NET Core框架优秀且丰富，第三方库也十分优秀；</li>
        <li><strong>UI绘制功能强大</strong>：对比其他多种UI库，利用Web前端技术，UI绘制十分灵活、方便且强大；</li>
        <li><strong>绘图库丰富</strong>：可以复用现有非常丰富的前端绘图库；</li>
        <li><strong>多端UI统一</strong>：可以做到多端UI统一</li>
        <li><strong>性能强大</strong>：C#语言的性能毋庸多说，Javascript的V8性能也非常不错。</li>
    </ol>

    <p>但同时，Blazor Hybrid也存在以下缺点：</p>
    <ol>
        <li><strong>部分库不支持跨平台</strong>：.NET Core是跨平台的，但依然有很多库不支持跨平台</li>
        <li><strong>老旧系统与硬件支持不好</strong>：TODO </li>
        <li>TODO</li>
    </ol>

    <p>对比类似框架与平台</p>
    <ul>
        <li><strong>Electron</strong>：TODO</li>
        <li><strong>Tauri</strong>：TODO</li>
        <li><strong>CEF</strong>：TODO</li>
        <li><strong>UNO Platform</strong>：TODO</li>
        <li><strong>Avalonia</strong>：TODO</li>
    </ul>

    <h3>Blazor 与 Blazor Hybrid 简介</h3>
    <h4>Blazor 概述</h4>
    <blockquote>
        <p>Blazor 是一种 .NET 前端 Web 框架，在单个编程模型中同时支持服务器端呈现和客户端交互性：</p>
        <ul>
            <li>使用 C# 创建丰富的交互式 UI。</li>
            <li>共享使用 .NET 编写的服务器端和客户端应用逻辑。</li>
            <li>将 UI 呈现为 HTML 和 CSS，以支持众多浏览器，其中包括移动浏览器。</li>
            <li>使用 .NET 和 Blazor 生成混合桌面和移动应用。</li>
        </ul>
        <p>使用 .NET 进行客户端 Web 开发可提供以下优势：</p>
        <ul>
            <li>使用 C# 编写代码，这可提高应用开发和维护的效率。</li>
            <li>利用现有的 .NET 库生态系统。</li>
            <li>受益于 .NET 的性能、可靠性和安全性。</li>
            <li>使用开发环境（例如 Visual Studio 或 Visual Studio Code）保持 Windows、Linux 或 macOS 上的工作效率。
                与新式托管平台（如 Docker）集成。</li>
            <li>以一组稳定、功能丰富且易用的通用语言、框架和工具为基础来进行生成。</li>
        </ul>
    </blockquote>
    <h4>Blazor Hybrid 概述</h4>
    <blockquote>
        <p> ASP.NET Core Blazor Hybrid，可以通过它在 ASP.NET Core 应用中使用 .NET 生成交互式客户端 Web UI。</p>
        <p>使用 Blazor Hybrid 将桌面和移动本机客户端框架与 .NET 和 Blazor 结合使用。</p>
        <p>
            在 Blazor Hybrid 应用中，Razor 组件在设备上本机运行。 组件通过本地互操作通道呈现到嵌入式 Web View 控件。
            组件不在浏览器中运行，并且不涉及 WebAssembly。 Razor
            组件可快速加载和执行代码，组件可通过 .NET 平台完全访问设备的本机功能。 Web View 中呈现的组件样式与平台相关，
            可能需要你使用自定义样式表来说明不同平台之间的呈现差异。
        </p>

    </blockquote>


    <h3>如何使用Blazor Hybrid</h3>
    <p>
        官方提供了Blazor Hybrid在Windows Forms、WPF、.NET MAUI中的支持。<br />
        文档：<a href="https://learn.microsoft.com/en-us/aspnet/core/blazor/hybrid" target="_blank">ASP.NET Core Blazor
            Hybrid</a><br />
        Blazor Hybrid on <strong>Windows Forms</strong> 仅支持 Windows 系统。<br />
        Blazor Hybrid on <strong>WPF</strong> 仅支持 Windows 系统。<br />
        Blazor Hybrid on <strong>.NET MAUI</strong> 支持Windows、macOS、iOS、Android系统<br />
    </p>
    <p>
        第三方的UI框架，比如Photino，也提供了对Blazor的支持<br />
        文档：<a href="https://docs.tryphotino.io/Photino-Blazor">Photino.Blazor
        </a><br />
        Blazor Hybrid on <strong>Photino</strong> 支持Windows、macOS、Linux系统
    </p>


    <h3>用Web技术栈开发桌面应用的一些局限性</h3>
    <h4>Web UI是流式布局的</h4>
    <p>
        Web 技术栈一般用于网页的绘制，即流式布局的。从上到下滚动浏览的。虽然Web技术栈下有很多的前端视觉库，
        但很多都是基于流式布局的，在桌面应用可能难以驾驭<br />
        如果你的应用就需要流式布局，那不成问题。<br />
        但较多的应用，以固定布局的形式会比较多，偶尔会有上下滚动浏览的情况。<br />
        较新的HTML5+CSS3技术中，Flex布局方式对此提供了很大的便捷。<br />
        我也正着手开发一套把Web技术栈用于桌面/移动应用开发的Blazor UI框架。
        <article-link name="solid-blazor" /><br />
    </p>
    <p>TODO</p>
</template>