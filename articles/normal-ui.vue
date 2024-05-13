<template>
    <h2>Normal UI 概述</h2>
    <p>
        Normal UI旨在创建一个跨语言、跨平台、原生渲染的UI框架。<br/>
        HTML+CSS具有极佳的灵活性与UI绘制能力。但其原应用于Web开发，在应用应用开发中，具有诸多缺点。<br/>
        其他的UI框架，都绑定了特定的语言，特定的平台。 <br/>
        Normal UI 将参照HTML和CSS，创建自有的标记语言（类似于HTML/XML）与样式语言（类似于CSS）。
    </p>


    <h2>设计原则</h2>
    <p>
        
    </p>

    <h2>NML (Normal Markup Language)</h2>
    <dl>
        <dt>&lt;nml&gt;</dt>
        <dd>
            NML文档的根元素，将继承 viewport 的尺寸。
        </dd>

        <h2>NCSS (Normal Cascading Style Sheets)</h2>
    </dl>

    <h3>Box Model</h3>
    <dl>
        <dt>margin-[top|right|bottom|left]</dt>
        <dd>外边距</dd>
        <dt>padding-[top|right|bottom|left]</dt>
        <dd>内边距</dd>
        <dt>border-[top|right|bottom|left]-width</dt>
        <dd>边框宽度</dd>
        <dt>border-[top|right|bottom|left]-color</dt>
        <dd>边框颜色</dd>
        <dt>border-[top|right|bottom|left]-style</dt>
        <dd>边框样式</dd>
    </dl>
    
    <h3>Layouting</h3>
    <dl>
        <dt>display</dt>
        <dd>
            <dl>
                <dt>block</dt>
                <dd>块级元素</dd>
                <dt>inline</dt>
                <dd>行级元素</dd>
                <dt>inline-block</dt>
                <dd>外部为行级元素，内部为块级元素</dd>
            </dl>
        </dd>

        <dt>layout</dt>
        <dd>
            <div>仅有块级元素适用 layout 属性</div>
            <dl>
                <dt>flow</dt>
                <dd>
                    流式布局。<br/>
                </dd>
                <dt>stack</dt>
                <dd>
                    栈式布局。<br/>
                </dd>
                <dt>panel</dt>
                <dd>
                    面板布局。<br/>
                </dd>
                <dt>flex</dt>
                <dd>
                    弹性布局。<br/>
                </dd>
                <dt>grid</dt>
                <dd>
                    表格布局。<br/>
                </dd>
            </dl>
        </dd>

        <dt>direction</dt>
        <dd>子元素排列方向。仅适用于 layout 为 flow 或者 stack</dd>

        <dt>top, right, bottom, left </dt>
        <dd>与父元素的定位属性。仅适用于 layout 为 panel</dd>

        <dt>width, height</dt>
        <dd>宽度与高度。</dd>

    </dl>

    <h3>Alignment</h3>
    <dl>
        <dt>align-horizontal</dt>
        <dd>
            说明：水平对齐 <br/>
            取值：left | center | right | stretch<br/>
            默认：left
        </dd>

        <dt>align-vertical</dt>
        <dd>
            说明：垂直对齐<br/>
            取值：top | middle | bottom | stretch<br/>
            默认：top
        </dd>
    </dl>

</template>