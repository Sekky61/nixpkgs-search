import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, of } from 'rxjs';

interface SearchResponse {
  query: string;
  total_results: number;
  results: SearchResult[];
}

export interface SearchResult {
  name: string;
  summary: string;
  last_updated: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  http = inject(HttpClient);
  private _results = signal<SearchResult[]>([]);
  results = this._results.asReadonly();

  fetchSearch(query: string) {
    console.log('call search');
    this._results.set(mock);
    return;
    this.http
      .get<SearchResponse>(`/api/search`, { params: { q: query } })
      .pipe(
        catchError(err => {
          console.error('api failed', err);
          return of({
            query: '',
            total_results: '',
            results: [] as SearchResult[],
          });
        })
      )
      .subscribe(response => {
        this._results.set(response.results);
        console.log('search response', response);
      });
  }
}

const mock = [
    {
        "name": "aragorn",
        "summary": "Detects tRNA, mtRNA, and tmRNA genes in nucleotide sequences",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "arandr",
        "summary": "Simple visual front end for XRandR",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "arangodb",
        "summary": "Native multi-model database with flexible data models for documents, graphs, and key-values",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "aranym",
        "summary": "Atari Running on Any Machine",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "aravis",
        "summary": "Library for video acquisition using GenICam cameras",
        "last_updated": "2025-01-16T05:04:52Z"
    },
    {
        "name": "arb",
        "summary": "Library for arbitrary-precision interval arithmetic",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "arcan",
        "summary": "Combined Display Server, Multimedia Framework, Game Engine",
        "last_updated": "2025-01-17T10:46:57Z"
    },
    {
        "name": "arcanist",
        "summary": "Command line interface to Phabricator",
        "last_updated": "2024-06-12T20:55:33Z"
    },
    {
        "name": "archi",
        "summary": "ArchiMate modelling toolkit",
        "last_updated": "2025-01-03T14:51:55Z"
    },
    {
        "name": "archimede",
        "summary": "Unobtrusive directory information fetcher",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "archimedes",
        "summary": "GNU package for semiconductor device simulations",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "archipelago",
        "summary": "Multi-Game Randomizer and Server",
        "last_updated": "2025-01-14T01:21:38Z"
    },
    {
        "name": "ArchiSteamFarm",
        "summary": "Application with primary purpose of idling Steam cards from multiple accounts simultaneously",
        "last_updated": "2025-01-17T10:46:57Z"
    },
    {
        "name": "archivebox",
        "summary": "Open source self-hosted web archiving",
        "last_updated": "2025-01-17T10:46:57Z"
    },
    {
        "name": "archivemount",
        "summary": "Gateway between FUSE and libarchive: allows mounting of cpio, .tar.gz, .tar.bz2 archives",
        "last_updated": "2025-01-06T03:40:18Z"
    },
    {
        "name": "archiveopteryx",
        "summary": "An advanced PostgreSQL-based IMAP/POP server",
        "last_updated": "2024-02-24T23:06:34Z"
    },
    {
        "name": "archiver",
        "summary": "Easily create & extract archives, and compress & decompress files of various formats",
        "last_updated": "2025-01-14T19:01:50Z"
    },
    {
        "name": "archivy",
        "summary": "Self-hosted knowledge repository",
        "last_updated": "2025-01-08T07:19:28Z"
    },
    {
        "name": "ardopc",
        "summary": "ARDOP (Amateur Radio Digital Open Protocol) TNC implementation by John Wiseman (GM8BPQ)",
        "last_updated": "2025-01-12T14:45:23Z"
    },
    {
        "name": "ardour",
        "summary": "Multi-track hard disk recording software",
        "last_updated": "2025-01-02T12:43:26Z"
    },
    {
        "name": "ardugotools",
        "summary": "CLI toolset for Arduboy",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "arduino",
        "summary": "Open-source electronics prototyping platform",
        "last_updated": "2025-01-03T14:51:55Z"
    },
    {
        "name": "arduinoOTA",
        "summary": "Tool for uploading programs to Arduino boards over a network",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "areca",
        "summary": "An Open Source personal backup solution",
        "last_updated": "2023-02-24T09:01:09Z"
    },
    {
        "name": "arelle",
        "summary": "Open source XBRL platform",
        "last_updated": "2025-01-17T10:46:57Z"
    },
    {
        "name": "arena",
        "summary": "Chess GUI for analyzing with and playing against various engines",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "ares",
        "summary": "Open-source multi-system emulator with a focus on accuracy and preservation",
        "last_updated": "2025-01-13T08:04:02Z"
    },
    {
        "name": "argagg",
        "summary": "Argument Aggregator",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "argbash",
        "summary": "Bash argument parsing code generator",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "argc",
        "summary": "Command-line options, arguments and sub-commands parser for bash",
        "last_updated": "2024-12-31T22:49:03Z"
    },
    {
        "name": "argo",
        "summary": "Container native workflow engine for Kubernetes",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "argocd",
        "summary": "Declarative continuous deployment for Kubernetes",
        "last_updated": "2025-01-04T17:00:17Z"
    },
    {
        "name": "argon",
        "summary": "Full featured tool for Roblox development",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "argononed",
        "summary": "Replacement daemon for the Argon One Raspberry Pi case",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "argparse",
        "summary": "Argument Parser for Modern C++",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "argtable",
        "summary": "Single-file, ANSI C command-line parsing library",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "arguments",
        "summary": "Library for argument handling for MINC programs",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "argus",
        "summary": "Audit Record Generation and Utilization System for networks",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "argyllcms",
        "summary": "Color management system (compatible with ICC)",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "aria",
        "summary": "A lightweight, multi-protocol, multi-source, command-line download utility",
        "last_updated": "2024-03-29T12:35:36Z"
    },
    {
        "name": "aria2",
        "summary": "Lightweight, multi-protocol, multi-source, command-line download utility",
        "last_updated": "2025-01-16T05:04:52Z"
    },
    {
        "name": "ariang",
        "summary": "Modern web frontend making aria2 easier to use",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "arianna",
        "summary": "An Epub Reader for Plasma and Plasma Mobile",
        "last_updated": "2023-08-22T06:04:29Z"
    },
    {
        "name": "aribb24",
        "summary": "Library for ARIB STD-B24, decoding JIS 8 bit characters and parsing MPEG-TS stream",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "aribb25",
        "summary": "Sample implementation of the ARIB STD-B25 standard",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "ario",
        "summary": "GTK client for MPD (Music player daemon)",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "arion",
        "summary": "Run docker-compose with help from Nix/NixOS",
        "last_updated": "2025-01-09T11:09:19Z"
    },
    {
        "name": "arj",
        "summary": "Open-source implementation of the world-famous ARJ archiver",
        "last_updated": "2024-12-30T01:48:12Z"
    },
    {
        "name": "arjun",
        "summary": "HTTP parameter discovery suite",
        "last_updated": "2024-12-23T21:10:33Z"
    },
    {
        "name": "ark",
        "summary": "Graphical file compression/decompression utility",
        "last_updated": "2023-02-24T09:01:09Z"
    }
];
