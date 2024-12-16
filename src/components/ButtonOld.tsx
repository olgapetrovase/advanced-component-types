import { ComponentPropsWithoutRef } from "react";

type ButtonOldProps = {
    el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorOldProps = {
    el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

export default function ButtonOld(props: ButtonOldProps | AnchorOldProps) {
    if (props.el === 'anchor') {
        return <a {...props}></a>
    }

    return <button {...props}></button>
}