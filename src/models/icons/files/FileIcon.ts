import { IconGroup } from "../index";

export interface FileIcon {
    /**
     * Name of the icon, e.g. 'javascript.svg'
     */
    icon: string;

    /**
     * Define the file extensions that should use this icon.
     * E.g. ['js']
     */
    extensions?: string[];

    /**
     * Define if there are some static file names that should apply this icon.
     * E.g. ['sample.js']
     */
    fileNames?: string[];

    /**
     * Define if there is a light icon available.
     */
    light?: boolean;

    /**
     * Define if there is a high contrast icon available.
     */
    highContrast?: boolean;

    /**
     * Define if the icon should be disabled.
     */
    disabled?: boolean;

    /**
     * Defines a group to which this icon belongs. A group can be toggled and all icons inside this group can be enabled or disabled together.
     */
    group?: IconGroup;
}
