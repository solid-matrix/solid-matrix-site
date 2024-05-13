<template>
    <h2>设计目标</h2>
    <p>
        SolidMatrix.SolidBlazor 旨在设计一款基于Blazor，用于非流式布局界面开发的的UI框架</p>
    <p>
        HTML 与 CSS，为网页设计而生。
        网页天然是流式布局的。但流式布局在大多数情况下，不适合用于应用界面的开发。
        CSS3的新特性，让更多布局形式有了更好的操作性。
        SolidMatrix.SolidBalzor旨在开发一套组件，以弹性布局优先，同时兼顾固定布局，流式布局。
        同时，尽可能提供更大的灵活性与方便，兼顾其自适应与自响应的能力。
    </p>

    <h2>设计原则</h2>
    <dl>
        <dt>flex优先</dt>
        <dd>
            布局元素都将优先使用Flex特性。
            Flex可以实现横向和纵向的栈式布局Stack Layout。
            对于网格布局Grid Layout，CSS3最新特性grid将提供很大的便利性，但其尚未获得普遍的支持。
            因此依然使用Flex特性来实现网格布局。
        </dd>
        <dt><code>rem</code> 与 <code>em</code> 单位优先</dt>
        <dd>
            区别于使用固定的长度单位，如与设备关联的<code>px</code>或者与现实度量衡关联的 <code>mm</code>, <code>cm</code> 等，<code>rem</code> 与
            <code>em</code> 具有更好的自适应能力。在不同的设备，或全局统一调整框架的尺寸时，更好的便利性。
        </dd>
        <dt><code>line-height</code> 优于 <code>height</code></dt>
        <dt>css variable 优先</dt>
    </dl>


    <h2>抽象组件</h2>
    <dl>
        <dt id="SolidComponentBase">SolidComponentBase: ComponentBase</dt>
        <dd>
            为所有框架组件所继承
        </dd>
        <dt id="SolidFlexContainerBase">SolidFlexContainerBase: <a href="SolidComponentBase">SolidComponentBase</a></dt>
        <dd>
            Flex Container的抽象组件
        </dd>
        <dt id="SolidFlexItemBase">SolidFlexItemBase: <a href="SolidComponentBase">SolidComponentBase</a></dt>
        <dd>
            Flex Item的抽象组件
        </dd>
        <dt id="SolidFlexConjointBase">SolidFlexConjointBase: <a href="SolidComponentBase">SolidComponentBase</a></dt>
        <dd>
            既是子元素的Flex Container，又是父元素的Flex Item的抽象组件。
        </dd>
        <dt id="SolidFixedBase">SolidFixedBase: <a href="SolidComponentBase">SolidComponentBase</a></dt>
        <dd>
            固定布局的抽象组件
        </dd>
        <dt id="SolidFlowBase">SolidFlowBase: <a href="SolidComponentBase">SolidComponentBase</a></dt>
        <dd>
            流式布局的抽象组件
        </dd>
    </dl>

    <h2>基础组件</h2>

    <dl>
        <dt id="SolidBlank">SolidBlank: SolidComponentBase</dt>
        <dd>空元素</dd>
        <dt id="SolidFlexContainer">SolidFlexContainer: <a href="#SolidFlexContainerBase">SolidFlexContainerBase</a></dt>
        <dd>
            弹性布局；Container
        </dd>
        <dt id="SolidFlexItem">SolidFlexItem: <a href="#SolidFlexItemBase">SolidFlexItemBase</a></dt>
        <dd>
            弹性布局；Item
        </dd>
        <dt id="SolidFlexConjoint">SolidFlexConjoint: <a href="#SolidFlexConjointBase">SolidFlexConjointBase</a></dt>
        <dd>
            弹性布局；同为Container 和 Item
        </dd>
        <dt id="SolidStack">SolidStack: <a href="#SolidFlexConjoint">SolidFlexConjoint</a></dt>
        <dd>
            弹性布局；栈式布局组件。
            用于纵向或者横向布局元素。
        </dd>
        <dt id="SolidGrid">SolidGrid: <a href="#SolidFlexConjoint">SolidFlexConjoint</a></dt>
        <dd>
            弹性布局；网格布局组件
        </dd>
        <dt id="SolidPane">SolidPane: <a href="#SolidFlexConjoint">SolidFlexConjoint</a></dt>
        <dd>
            弹性布局；最常用的组件组件，默认<br />
            <code>flex-direction: column</code><br />
            <code>flex-wrap: nowrap</code><br />
            <code>justify-content: flex-start</code><br />
            <code>align-items: stretch</code><br />
            <code>flex: 1 1 0%</code><br />
            <code>align-self: auto</code><br />
        </dd>
        <dt>SolidFixed</dt>
        <dd>固定布局；</dd>
        <dt>SolidFlow</dt>
        <dd>流式布局：</dd>
    </dl>

    <h2>UI组件</h2>
    <dl>
        <dt>SolidLayout: <a href="#SolidFlexConjoint">SolidFlexConjoint</a></dt>
        <dd>
            <code>MainLayout</code> 根元素
        </dd>
        <dt>SolidHeader: <a href="#SolidFlexConjoint">SolidFlexConjoint</a></dt>
        <dd>
            <code>MainLayout</code> <code>&lt;header&gt;</code>
        </dd>
        <dt>SolidMain: <a href="#SolidFlexConjoint">SolidFlexConjoint</a></dt>
        <dd>
            <code>MainLayout</code> <code>&lt;main&gt;</code>
        </dd>
        <dt>SolidFooter: <a href="#SolidFlexConjoint">SolidFlexConjoint</a></dt>
        <dd>
            <code>MainLayout</code> <code>&lt;footer&gt;</code>
        </dd>
        <dt>SolidButton</dt>
        <dd>
            <code>&lt;button&gt;</code>
        </dd>
    </dl>
</template>