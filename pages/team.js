import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import team2021 from "./api/team2021.json";
import axios from "axios";
import { Box, Skeleton, SkeletonCircle, Spacer } from "@chakra-ui/react";

const Team = () => {
  const [users, setUsers] = useState([]);
  const getUsers2022 = async () => {
    const response = await fetch(
      "https://opensheet.elk.sh/1lbMJu8ZMBXcx66n0pkZI1eb8-fi8kBDQdwPoiIPPSRY/team2022"
    );
    setUsers(await response.json());
  };

  const getUsers2021 = async () => {
    const response = await fetch(
      "https://opensheet.elk.sh/1lbMJu8ZMBXcx66n0pkZI1eb8-fi8kBDQdwPoiIPPSRY/team2021"
    );
    setUsers(await response.json());
  };

  const getUsers2020 = async () => {
    const response = await fetch(
      "https://opensheet.elk.sh/1lbMJu8ZMBXcx66n0pkZI1eb8-fi8kBDQdwPoiIPPSRY/team2020"
    );
    setUsers(await response.json());
  };

  const getUsers2019 = async () => {
    const response = await fetch(
      "https://opensheet.elk.sh/1lbMJu8ZMBXcx66n0pkZI1eb8-fi8kBDQdwPoiIPPSRY/team2019"
    );
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers2022();
  }, []);

  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const fetchData = async () => {
    const response = await axios.get(apiURL);

    setUsers(response.data);
  };

  return (
    <>
      <div className=" items-center justify-center">
        <p className="font-serif text-center text-2xl font-extrabold text-black-100">
          <p className="text-primary_orange-0  text-5xl text center font-extrabold mb-10">
            Meet The Team
          </p>
          <p className="font-serif dark:text-white">
            Individuals can and do make a difference, <br />
            but it takes a team to really mess things up
          </p>
        </p>
      </div>
      <Spacer mt={10} />
      <div className="flex flex-row justify-center flex-wrap items-center flex-wrap gap-5 ">
        <a>
          <button
            className="focus:bg-orange-300 bg-primary_orange-0 hover:bg-orange-600 text-md text-white font-bold px-12 py-4 rounded md:text-xl md:py-6 "
            onClick={() => getUsers2022()}
          >
            2022
          </button>
        </a>
        <a>
          <button
            className="focus:bg-orange-300 bg-primary_orange-0 hover:bg-orange-600 text-md text-white font-bold px-12 py-4 rounded md:text-2xl md:py-6"
            onClick={() => getUsers2021()}
          >
            2021
          </button>
        </a>
        <a>
          <button
            className=" focus:bg-orange-300 bg-primary_orange-0 hover:bg-orange-600 text-md text-white font-bold px-12 py-4 rounded md:text-2xl md:py-6 "
            onClick={() => getUsers2020()}
          >
            2020
          </button>
        </a>
        <a>
          <button
            className="focus:bg-orange-300 bg-primary_orange-0 hover:bg-orange-600 text-md text-white font-bold px-12 py-4 rounded md:text-2xl md:py-6 "
            onClick={() => getUsers2019()}
          >
            2019
          </button>
        </a>
      </div>
      <Spacer mt={10} />
      <div className="flex flex-wrap w-100 justify-around gap-5">
        {users.map((curElem, i) => {
          return (
            <>
              {curElem == null ? (
                <div
                  className="flex flex-col items-center justify-center w-80 h-80 gap-5"
                  key={i}
                >
                  <SkeletonCircle size="100" />
                  <br />
                  <Skeleton>
                    <Box className="text-center px={4}"> Cogito ergo Sum </Box>
                  </Skeleton>
                  <Skeleton>
                    <Box className="text-center px={4}">
                      {" "}
                      Connection is power - DedSec
                    </Box>
                  </Skeleton>
                </div>
              ) : (
                <div className="flex items-center justify-center w-80" key={i}>
                  <div className="p-4 shadow">
                    <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                      {/* {console.log(curElem.Photograph)} */}
                      <img
                        src={curElem.Image}
                        alt="Team Member Photo"
                        className="object-cover object-center w-full h-full"
                        // height={400}
                        // width={400}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="font-bold text-indigo-500 md:text-lg">
                        {i + 1}. {curElem["Name"]}
                      </div>
                      <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                        {curElem["Designation"]}
                      </p>

                      <div className="flex">
                        <div className="flex gap-4">
                          {curElem["GitHub Account"] == "" ? (
                            <></>
                          ) : (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={curElem["GitHub"]}
                            >
                              <svg
                                className="w-6 h-6 text-blue-600 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                              </svg>
                            </a>
                          )}
                          {curElem["Twitter"] == "" ? (
                            <></>
                          ) : (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={curElem["Twitter"]}
                            >
                              <svg
                                className="w-6 h-6 text-blue-300 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                            </a>
                          )}
                          {curElem["LinkedIn"] == "" ? (
                            <></>
                          ) : (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={curElem["LinkedIn"]}
                            >
                              <svg
                                className="w-6 h-6 text-blue-500 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Team;
