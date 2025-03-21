/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1IPBlock } from './v1IPBlock';
import { V1LabelSelector } from './v1LabelSelector';

/**
* NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed
*/
export class V1NetworkPolicyPeer {
    'ipBlock'?: V1IPBlock;
    'namespaceSelector'?: V1LabelSelector;
    'podSelector'?: V1LabelSelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ipBlock",
            "baseName": "ipBlock",
            "type": "V1IPBlock"
        },
        {
            "name": "namespaceSelector",
            "baseName": "namespaceSelector",
            "type": "V1LabelSelector"
        },
        {
            "name": "podSelector",
            "baseName": "podSelector",
            "type": "V1LabelSelector"
        }    ];

    static getAttributeTypeMap() {
        return V1NetworkPolicyPeer.attributeTypeMap;
    }
}

