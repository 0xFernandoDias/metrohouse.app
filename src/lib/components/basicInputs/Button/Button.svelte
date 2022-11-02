<!-- https://www.figma.com/file/gB5Xr9f8ql3ehnAzaynNzB/Microsoft-Fluent-Web-(Community)?node-id=3194%3A10322
https://developer.microsoft.com/en-us/fluentui#/controls/web/button
https://react.fluentui.dev/?path=/docs/components-button-button--default -->


<script lang="ts">
	export let appearance: "subtle" | "outline" | "secondary" | "primary" | "transparent" = "primary"
	export let disabled: boolean = false
	export let dropdownIcon: boolean = false
	export let dropdownIconSplit: boolean = false
    export let shape: "circular" | "rounded" | "square" = "rounded"
    export let size: "small" | "medium" | "large" = "medium"
    export let primaryIcon: boolean = false
    export let data: object = {}
    export let href: string = ''
    export let iconProps: object = {}
    export let keytipProps: object = {}
    export let menuProps: object = {}
    export let menuIconProps: object = {}
    export let toggle: object = {}
    export let onClick: () => void = () => {}
    // checked
</script>
<!-- 
...restProps, styleProps
onHover pressed focused -->

<div as="button">
	<slot name="primaryIcon" />
    <div>
		<slot>Button</slot>
		<slot name="secondaryText" />
	</div>
	<div>
		<slot name="dropdownIconSplit" />
		<slot name="dropdownIcon" />
	</div>
</div>

<style></style>
