import React from "react";

function Header() {
    return(
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container">
                <a class="navbar-brand" id="home-link">이노링크 표준 UI</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mainNav">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/Index">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Privacy">Privacy</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto mb-2 mb-sm-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="resultsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                결과데이터 조회
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="resultsDropdown">
                                <li><a class="dropdown-item" href="#">신계약 시뮬레이션</a></li>
                                <li><a class="dropdown-item" href="#">상품별 물량 설정</a></li>
                                <li><a class="dropdown-item" href="#">룰량 및 가정민감도 설정</a></li>
                                <li><a class="dropdown-item" href="#">신계약 시뮬레이션 결과</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="workManagementDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                작업 관리
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="workManagementDropdown">
                                <li><a class="dropdown-item" href="#">작업 현황</a></li>
                                <li><a class="dropdown-item" href="#">작업 로그</a></li>
                                <li><a class="dropdown-item" href="#">프로젝트 관리</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="systemManagementDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                시스템 관리
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="systemManagementDropdown">
                                <li><a class="dropdown-item" href="#">기초데이터 조회</a></li>
                                <li><a class="dropdown-item" href="#">자산 관리</a></li>
                                <li><a class="dropdown-item" href="#">로그 기록 관리</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="userManagementDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                사용자 관리
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="userManagementDropdown">
                                <li><a class="dropdown-item" href="/Account/UserSettings">사용자 설정</a></li>
                                <li><a class="dropdown-item" href="#">권한 설정</a></li>
                                <li><a class="dropdown-item" href="#">비밀번호 초기화</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;