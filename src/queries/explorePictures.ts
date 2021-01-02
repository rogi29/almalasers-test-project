/**
 * explorePictures Query
 * Example: http://34.250.129.9/public/explorePictures?path=root
 * 
 * Response Codes:
 * - 401 unauthorized request due to an incorrect or missing X-TOKEN header
 * - 404 the requested path was not found
 * - 599 random server error that can be thrown for any request
 * - 500 unknown server error
 * 
 * Response Data Structure:
 * - type: the node type (0 = folder, 1 = image)
 * - label: the node name
 * - children: the child nodes of the node
 * 
 * @param {string} path
 */

import useSWR from 'swr';
import { API_BASE_URL, API_TOKEN } from '../globals';
import { FileStructure } from '../modals/FileStructure';

const defaultConfig = {
    method: 'GET',
    headers: {
        'X-TOKEN': API_TOKEN
    }
};

export const DEFAULT_PATH_PARAM = 'root';

export const getURL = (path: string): URL => new URL(`explorePictures?path=${path}`, API_BASE_URL);

export const useExplorePictures = (path = DEFAULT_PATH_PARAM) => useSWR<FileStructure, Error>(path, explorePictures);

export const explorePictures = (path = DEFAULT_PATH_PARAM, init: RequestInit = {}): Promise<FileStructure> => (
    fetch(
        getURL(path).toString(),
        { ...defaultConfig, ...init }
    )
    .then(res => res.json())
    .then(json => json.data)
);